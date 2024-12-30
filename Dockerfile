FROM python:3.11-alpine3.20

# User
RUN addgroup -S app && \
    adduser -S app -G app -u 1000 -h /app -s /bin/bash && \
    apk update && \
    apk upgrade

# Python
RUN pip3 install --no-cache-dir --upgrade pip && \
    pip3 install --no-cache-dir --upgrade setuptools && \
    pip3 install poetry && \
    # Cleanup
    echo "Cleaning up..." && \
    rm -vrf /var/cache/apk/*

# Poetry
RUN POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /app

COPY backend/poetry.lock backend/pyproject.toml /app/

RUN poetry config virtualenvs.in-project true && \
    poetry install --no-root && poetry update setuptools && rm -rf $POETRY_CACHE_DIR

COPY backend/llmchat/ /app/

RUN poetry install && \
    poetry run python manage.py makemigrations && \
    poetry run python manage.py migrate

RUN chown -R app:app /app

USER 1000

EXPOSE 8080

CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8080"]
