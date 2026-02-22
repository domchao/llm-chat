# Agent Skills Developer Guide

This guide explains how to create, modify, and test Agent Skills for the LLM Chat application.

## What Are Agent Skills?

Agent Skills are filesystem-based capabilities that extend Claude's functionality. Each skill is a directory containing a `SKILL.md` file with instructions, metadata, and optional supporting resources.

### Key Concepts

**Progressive Disclosure**: Skills use a three-level loading model:

1. **Metadata** (always loaded): Name and description from YAML frontmatter
2. **Instructions** (loaded when triggered): Main content of SKILL.md
3. **Resources** (loaded as needed): Supporting files referenced in instructions

**Autonomous Invocation**: Claude automatically decides when to use a skill based on the description field. You don't need to explicitly invoke skills - they activate when relevant to the user's request.

**Filesystem-Based**: Skills exist as files in `backend/.claude/skills/` and are discovered automatically by the Claude Agent SDK. No database or code changes required.

## Creating a New Skill

### Step 1: Create Directory Structure

```bash
mkdir backend/.claude/skills/your-skill-name
```

### Step 2: Create SKILL.md

Create `backend/.claude/skills/your-skill-name/SKILL.md`:

```yaml
---
name: your-skill-name
description: Detailed description of when to use this skill. Include specific triggers, use cases, and keywords.
---

# Your Skill Name

Main instructions for Claude to follow...

## Section 1

Detailed guidance...

## Section 2

More instructions...
```

### Step 3: (Optional) Add Supporting Files

You can include additional files that the skill references:

```
your-skill-name/
├── SKILL.md
├── TEMPLATE.md        # Templates or examples
├── REFERENCE.md       # Reference documentation
└── scripts/
    └── helper.py      # Executable scripts
```

Claude can read these files using bash commands when needed, and they don't consume context until accessed.

## Writing Effective Skills

### Name Requirements

-   Maximum 64 characters
-   Lowercase letters, numbers, and hyphens only
-   No XML tags or reserved words ("anthropic", "claude")

### Description Best Practices

The description determines when Claude invokes your skill. Make it:

**Specific**: Include exact keywords and use cases

```yaml
# Good
description: Apply brand voice guidelines for marketing content. Use when creating marketing copy, social media posts, product descriptions, landing pages, email campaigns, or any customer-facing marketing material.

# Bad
description: Use for marketing stuff.
```

**Actionable**: Clearly state what the skill does

```yaml
# Good
description: Structured code review format with severity levels. Use when reviewing code, pull requests, diffs, or when user asks for code review or feedback on their code.

# Bad
description: Helps with code.
```

**Keyword-Rich**: Include terms users might mention

```yaml
# Good
description: Brief, direct responses with minimal explanation. Use when user requests concise answers, quick responses, or explicitly asks to "be brief" or "keep it short".

# Bad
description: Makes responses shorter.
```

### Instruction Content

**Be Clear and Direct**:

-   Use imperative voice ("Do this" not "You should do this")
-   Provide specific examples
-   Include both what to do and what to avoid

**Structure Well**:

-   Use headings to organize content
-   Break complex guidance into sections
-   Provide templates or formats when applicable

**Include Examples**:

```markdown
## Examples

**Good**:
"Export your reports to PDF with one click."

**Bad**:
"Our industry-leading, revolutionary PDF export functionality."
```

## Testing Skills

### Test Skill Discovery

Start the Django development server and create a new chat thread. Ask:

```
What skills are available?
```

Claude should list all skills in `backend/.claude/skills/`.

### Test Skill Invocation

Create test queries that should trigger each skill:

**Marketing Tone**:

```
Write a marketing email for our new AI chat application
```

**Technical Docs**:

```
Document the API endpoint for creating messages
```

**Concise Mode**:

```
How do I sort an array in JavaScript? Keep it brief.
```

**Code Review**:

```python
def calculate(x, y):
    return x + y
```

```
Review this Python function
```

**Structured Report**:

```
Create an analysis report on user engagement for Q4
```

### Verify Skill Application

Check that the response follows the skill's guidelines:

-   Marketing responses use enthusiastic but professional tone
-   Technical docs follow the structured format
-   Concise responses are brief and direct
-   Code reviews use the severity level format
-   Reports include executive summary and sections

## Troubleshooting

### Skill Not Loading

**Check directory location**: Skills must be in `backend/.claude/skills/`

```bash
ls backend/.claude/skills/
```

**Verify SKILL.md exists**: Each skill directory needs a SKILL.md file

```bash
ls backend/.claude/skills/your-skill-name/SKILL.md
```

**Check YAML frontmatter**: Ensure proper formatting

```yaml
---
name: skill-name
description: Description here.
---
```

Common issues:

-   Missing `---` delimiters
-   Incorrect indentation
-   Missing required fields (name, description)

### Skill Not Being Invoked

**Review the description**: Make sure it includes relevant keywords for your use case

**Test with explicit request**: Try mentioning the skill's purpose directly

```
Use the marketing tone to write a product description
```

**Check allowed_tools**: Verify "Skill" is in the allowed_tools list in [backend/llmchat/utils/claude_agent_utils.py](backend/llmchat/utils/claude_agent_utils.py)

**Check cwd and setting_sources**: Verify the Agent SDK configuration:

```python
options = ClaudeAgentOptions(
    cwd=backend_dir,  # Should point to backend/llmchat directory
    setting_sources=["project"],  # Required to load skills
    allowed_tools=["WebSearch", "WebFetch", "Skill"],
)
```

### Skill Invoked Incorrectly

**Description too broad**: Narrow the description to specific use cases

```yaml
# Too broad - might trigger unexpectedly
description: Use for writing.

# Better - specific triggers
description: Use when creating marketing copy, social media posts, or customer-facing content.
```

**Conflicting skills**: If multiple skills match, Claude chooses based on best fit. Make descriptions mutually exclusive when possible.

## Best Practices

### Organization

-   **One skill per directory**: Don't mix multiple skills in one directory
-   **Logical grouping**: Related files go together (main skill + templates + examples)
-   **Clear naming**: Use descriptive directory names (marketing-tone, code-review, etc.)

### Content

-   **Focus on one capability**: Each skill should have a clear, focused purpose
-   **Provide examples**: Show both good and bad examples
-   **Reference supporting files**: Use relative links to additional resources
-   **Keep instructions concise**: Claude loads the entire SKILL.md when triggered

### Maintenance

-   **Version control**: Commit skills to git
-   **Document changes**: Update skill descriptions when modifying behavior
-   **Test after changes**: Verify skills still work as expected
-   **Remove unused skills**: Delete skills that are no longer needed to reduce discovery overhead

## Advanced Patterns

### Multi-File Skills

Skills can reference additional files for complex use cases:

```markdown
# Main Skill Instructions

For detailed API reference, see [API_REFERENCE.md](API_REFERENCE.md).

For code examples, see [EXAMPLES.md](EXAMPLES.md).
```

Claude reads these files on-demand using bash commands.

### Conditional Guidance

Provide different paths based on context:

```markdown
## For New Projects

Start with this template...

## For Existing Projects

Integrate by following these steps...
```

### Progressive Detail

Structure content from high-level to detailed:

```markdown
## Quick Start

[Brief, essential information]

## Detailed Guide

[Comprehensive instructions]

## Advanced Topics

[Edge cases and specialized scenarios]
```

Claude can stop reading when it has enough information for the task.

## Example Skills

See the existing skills for examples:

-   [marketing-tone](backend/.claude/skills/marketing-tone/SKILL.md) - Brand voice guidelines with examples
-   [technical-docs](backend/.claude/skills/technical-docs/SKILL.md) - Technical writing standards
-   [concise-mode](backend/.claude/skills/concise-mode/SKILL.md) - Brief response format
-   [code-review](backend/.claude/skills/code-review/SKILL.md) - Multi-file skill with template
-   [structured-report](backend/.claude/skills/structured-report/SKILL.md) - Multi-file skill with example

## Additional Resources

-   [Agent Skills Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Conceptual overview and architecture
-   [Agent Skills Best Practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) - Authoring guidelines
-   [Agent Skills in the SDK](https://platform.claude.com/docs/en/agent-sdk/skills) - SDK-specific documentation
-   [Skills Cookbook](https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction) - Example skills and templates
