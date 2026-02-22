# Code Review Example

**Summary**: Adds user authentication middleware with JWT support. Clean implementation, good test coverage. Request changes due to security concern.

**Critical Issues**:
🔴 **auth.js:45** JWT secret is hardcoded
Recommendation: Use environment variable
Why: Hardcoded secrets are security vulnerability

**Important Suggestions**:
🟡 **auth.js:78** Missing error handling for expired tokens
Consider: Add try/catch and return 401 with clear message

**Positive Highlights**:

-   Excellent test coverage (95%)
-   Clear documentation in README

**Decision**: REQUEST CHANGES (address critical issue)
