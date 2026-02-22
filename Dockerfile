FROM python:3.11-alpine3.20

# User
# Note: Setting home to /home/app instead of /app to avoid .claude directory conflicts
# The Claude CLI uses $HOME/.claude for its state, and we use /app/.claude for project skills
RUN addgroup -S app && \
    adduser -S app -G app -u 1000 -h /home/app -s /bin/bash && \
    apk update && \
    apk upgrade

# Install Node.js and npm for Claude Code CLI
RUN apk add --no-cache nodejs npm bash

# Python
RUN pip3 install --no-cache-dir --upgrade pip && \
    pip3 install --no-cache-dir --upgrade setuptools && \
    pip3 install poetry && \
    # Cleanup
    echo "Cleaning up..." && \
    rm -vrf /var/cache/apk/*

# Install Claude Code CLI globally and verify installation
RUN npm install -g @anthropic-ai/claude-code && \
    which claude && \
    claude --version || echo "Claude CLI installation failed"

# Poetry
RUN POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

# Build frontend first
COPY frontend/package.json frontend/package-lock.json /app/frontend/
WORKDIR /app/frontend
RUN npm ci

COPY frontend/ /app/frontend/
COPY backend/llmchat/ /app/backend/llmchat/
RUN npm run build

# Setup backend
WORKDIR /app
COPY backend/poetry.lock backend/pyproject.toml /app/

RUN poetry config virtualenvs.in-project true && \
    poetry install --no-root && poetry update setuptools && rm -rf $POETRY_CACHE_DIR

# Copy backend files (frontend build output is already in place)
COPY backend/llmchat/ /app/
# Copy Agent Skills
COPY backend/.claude/ /app/.claude/

RUN poetry install && \
    poetry run python manage.py makemigrations && \
    poetry run python manage.py migrate

RUN chown -R app:app /app && \
    mkdir -p /home/app && \
    chown -R app:app /home/app

USER 1000

# Ensure Claude CLI is in PATH for app user
ENV PATH="/usr/local/bin:${PATH}"
# Set HOME so Claude CLI state goes to /home/app/.claude instead of /app/.claude
ENV HOME="/home/app"

EXPOSE 8080

CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8080"]
