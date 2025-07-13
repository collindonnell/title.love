# Copilot Instructions for title.love

## General Guidelines
- Follow Rails 8 conventions and best practices.
- Use Omakase style guide for Ruby code.
- Do not write code for me to copy-paste; provide explanations and guidance.
- If I ask a question, do not write code unless I specifically request it.
- NEVER write code unless I explicitly ask for it.
- Use my title-love project as context for all suggestions using RailsMCP
- Start each chat by confirming that Rails MCP is enabled and that you will use the title-love project context and that you will not write code unless I ask for it.
  - Keep it brief and to the point. Just give me the checkboxes that it's working.

## Project Overview
title.love is a Rails 8 application for title case conversion with user authentication. Users can create accounts, manage titles, and convert text to proper title case using a JavaScript library.

## Architecture & Key Patterns

### Authentication & Authorization
- Simple session-based auth in `ApplicationController#current_user` 
- Use `before_action :require_login` for protected controllers
- Test helper: `login_as(user)` in integration tests (see `test/helpers/auth_helpers.rb`)

### Data Model
- `User` has many `titles` (dependent: :destroy)
- `Title` belongs to `user`, validates presence/length of `:title` and `:title_cased`
- Nested routes: `users/:user_id/titles` (no standalone title routes)

### Frontend Stack
- **Hotwire**: Turbo for SPA-like navigation, Stimulus for JavaScript
- **Styling**: Tailwind CSS + DaisyUI components (see `package.json`)
- **Title casing**: Custom vendored `title-case.js` library in `vendor/javascript/`

### Controller Patterns
- All title operations scoped to `current_user.titles` for security
- Turbo Stream responses for AJAX (see `TitlesController#create`, `#destroy`)
- Use `params.expect()` for strong parameters (Rails 8 pattern)

## Development Workflow

### Running the App
```bash
bin/dev          # Starts Rails server + Tailwind watcher via foreman
bin/rails test   # Run test suite
```

### Key Commands
- `bin/rails tailwindcss:watch` - Auto-rebuild Tailwind (included in `bin/dev`)
- `bin/rails generate migration` - For database changes
- `bin/rubocop` - Code linting (Omakase style guide)
- `bin/brakeman` - Security scanning

### Testing Conventions
- Integration tests for controllers (not unit tests)
- Use fixtures for test data (`test/fixtures/`)
- Auth helper methods in `test/helpers/auth_helpers.rb`
- Model tests focus on validations and associations

## Important Files & Directories
- `config/routes.rb` - Nested resource structure
- `app/controllers/application_controller.rb` - Auth helpers
- `vendor/javascript/title-case.js` - Core title casing logic
- `Procfile.dev` - Development services (Rails + Tailwind)
- `bin/dev` - Main development script

## Project-Specific Conventions
- Title models require both `:title` (original) and `:title_cased` (converted) fields
- Controllers return both HTML and Turbo Stream formats for dynamic updates
- Use DaisyUI component classes over custom CSS
- Session-based auth (no JWT/tokens)
- SQLite for development/test, supports production deployment via Kamal

## Deployment
- Dockerized for production (see `Dockerfile`)
- Kamal deployment configured (`config/deploy.yml`)
- Solid Queue/Cache/Cable for background jobs and caching
