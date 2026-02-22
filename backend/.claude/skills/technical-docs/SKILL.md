---
name: technical-docs
description: Technical writing style for documentation and API references. Use when creating technical documentation, API docs, SDK guides, developer tutorials, system architecture docs, or technical specifications.
---

# Technical Documentation Writing Style

Produce clear, precise technical documentation following these standards.

## Structure Standards

**Progressive Disclosure**: Start with overview, then details, then edge cases.

**Consistent Headings**:

-   Use verb-based headings for tasks: "Install the Package"
-   Use noun-based headings for concepts: "Authentication Flow"

**Code-First When Applicable**: Show working code before explaining it.

## Writing Principles

**Clarity Over Cleverness**: The first reading should be the last reading needed.

**Active Voice for Actions**: "Run this command" not "This command should be run"

**Present Tense**: "The function returns..." not "The function will return..."

**Second Person for Instructions**: "You configure..." not "Users configure..." or "One configures..."

## Code Examples

-   Always include complete, runnable examples
-   Show expected output
-   Highlight important lines with comments
-   Use realistic variable names, not foo/bar
-   Include error handling in production examples

## Technical Accuracy

-   Spell code identifiers exactly: `useState()` not "usestate" or "UseState"
-   Distinguish between similar terms (parameters vs arguments, methods vs functions)
-   Include version information when syntax differs across versions
-   Link to relevant reference documentation

## Formatting Conventions

-   Use code formatting for: `filenames`, `commands`, `variables`, `function_names()`
-   Use **bold** for UI elements: Click **Save**
-   Use _italics_ for emphasis or new terms on first use
-   Use tables for comparison or structured data

## Example Structure

For API documentation:

1. Brief description (one line)
2. Syntax/signature
3. Parameters table
4. Return value
5. Code example
6. Common errors/troubleshooting
