# Variables
SHELL := /bin/bash

################
### Frontend ###
################

# Variables
FRONTEND_DIR := frontend
PACKAGE_MANAGER := npm
BUILD_CMD := $(PACKAGE_MANAGER) run build
INSTALL_CMD := $(PACKAGE_MANAGER) install

# Install dependencies
install:
	@echo "Installing dependencies..."
	cd $(FRONTEND_DIR) && $(INSTALL_CMD)

# Build the app
build: install
	@echo "Building the app..."
	cd $(FRONTEND_DIR) && $(BUILD_CMD)


################
### Backend  ###
################

# Variables
BACKEND_DIR := backend
PYTHON := python3
VENV := $(BACKEND_DIR)/.venv
ACTIVATE := source $(VENV)/bin/activate
APP_DIR := $(BACKEND_DIR)/llmchat
DJANGO_MANAGE := $(PYTHON) manage.py



# Create and activate virtual environment
venv:
	@echo "Creating virtual environment..."
	@if [ ! -d "$(VENV)" ]; then $(PYTHON) -m venv $(VENV); fi
	@echo "Virtual environment created. Run 'source $(VENV)/bin/activate' to activate."

# Install dependencies
python-install: venv
	@echo "Installing dependencies..."
	$(ACTIVATE) && cd $(BACKEND_DIR) && poetry install

# Run the development server
runserver: python-install
	@echo "Starting Django development server..."
	$(ACTIVATE) && cd $(APP_DIR) && $(DJANGO_MANAGE) runserver

# Apply database migrations
migrate: python-install
	@echo "Applying database migrations..."
	$(ACTIVATE) && cd $(APP_DIR) && $(DJANGO_MANAGE) migrate

# Create a new migration based on changes to models
makemigrations: python-install
	@echo "Creating new migration..."
	$(ACTIVATE) && cd $(APP_DIR) && $(DJANGO_MANAGE) makemigrations app

# Delete the database
database-delete:
	@echo "Deleting database..."
	cd $(APP_DIR) && rm -rf db.sqlite3 && rm -rf app/migrations

database-reset: database-delete makemigrations migrate
	@echo "Database reset complete."

# Clean up compiled Python files
clean:
	@echo "Cleaning up..."
	find . -name '*.pyc' -delete
	find . -name '__pycache__' -delete



################
### Help     ###
################
help:
	@echo "Usage:"
	@echo ""
	@echo "Frontend:"
	@echo "  make install           - Install dependencies"
	@echo "  make build             - Build the app for production"
	@echo "Backend:"
	@echo "  make venv              - Create a virtual environment"
	@echo "  make python-install    - Install dependencies"
	@echo "  make runserver         - Start the development server"
	@echo "  make migrate           - Apply database migrations"
	@echo "  make makemigrations    - Create new migrations"
	@echo "  make database-delete   - Delete database"
	@echo "  make database-reset    - Delete database and rebuild"
	@echo "  make clean             - Remove compiled files and caches"
	@echo "  make help              - Display this help message"
