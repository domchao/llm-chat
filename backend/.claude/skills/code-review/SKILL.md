---
name: code-review
description: Structured code review format with severity levels. Use when reviewing code, pull requests, diffs, or when user asks for code review or feedback on their code.
---

# Code Review Output Format

Structure all code reviews using this standardized format.

## Review Structure

### 1. Summary (Required)

-   Brief overview of changes (1-2 sentences)
-   Scope and impact assessment
-   Overall impression (Approve / Request Changes / Comment)

### 2. Critical Issues (If Any)

Issues that MUST be addressed before merge:

-   Security vulnerabilities
-   Data loss risks
-   Breaking changes without migration path
-   Performance regressions

Format each as:

```
🔴 **[File:Line]** Issue description
   Recommendation: Specific fix
   Why: Brief explanation
```

### 3. Important Suggestions

Non-blocking improvements that should be addressed:

-   Code quality issues
-   Missing error handling
-   Unclear naming
-   Missing tests for edge cases

Format each as:

```
🟡 **[File:Line]** Suggestion description
   Consider: Alternative approach
```

### 4. Nitpicks / Style (Optional)

Minor style preferences, optional improvements:

-   Formatting inconsistencies
-   Comment clarity
-   Variable naming preferences

Format each as:

```
🔵 **[File:Line]** Minor point
```

### 5. Positive Highlights (Encouraged)

Call out good practices:

-   Elegant solutions
-   Good test coverage
-   Clear documentation
-   Performance improvements

### 6. Approval Decision

**APPROVE**: Code meets standards, no blocking issues
**REQUEST CHANGES**: Critical issues must be addressed
**COMMENT**: Providing feedback without blocking merge

## Example Review Template

See [TEMPLATE.md](TEMPLATE.md) for a complete example review.
