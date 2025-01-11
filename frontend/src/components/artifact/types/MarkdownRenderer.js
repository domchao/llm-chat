import React from "react";
import { marked } from "marked";

export const MarkdownRenderer = ({ content }) => {
    marked.setOptions({
        breaks: true,
        gfm: true,
    });

    const html = marked(content);

    return (
        <div
            className="prose max-w-none
        prose-headings:text-[var(--markdown-heading)]
        prose-p:text-[var(--markdown-text)]
        prose-a:text-[var(--markdown-link)] hover:prose-a:opacity-80
        prose-strong:text-[var(--markdown-bold)]
        prose-em:text-[var(--markdown-italic)]
        prose-code:text-[var(--markdown-code)] prose-code:bg-[var(--markdown-code-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[var(--markdown-block-bg)] prose-pre:p-4 prose-pre:rounded
        prose-pre:code:bg-transparent prose-pre:code:p-0
        prose-blockquote:border-l-4 prose-blockquote:border-[var(--markdown-blockquote-border)]
        prose-blockquote:pl-4 prose-blockquote:text-[var(--markdown-blockquote)]
        prose-ul:text-[var(--markdown-text)]
        prose-ol:text-[var(--markdown-text)]
        prose-li:text-[var(--markdown-text)]
        prose-hr:border-[var(--markdown-hr)]
        prose-table:text-[var(--markdown-text)]
        prose-thead:border-[var(--markdown-border)]
        prose-tr:border-[var(--markdown-border)]
        prose-th:text-[var(--markdown-heading)]
        prose-td:border-[var(--markdown-border)]

        /* Table styles */
        prose-table:border-collapse prose-table:w-full
        prose-table:border-[var(--markdown-table-border)]
        prose-thead:bg-[var(--markdown-table-header-bg)]
        prose-th:text-[var(--markdown-table-header-text)]
        prose-th:p-2 prose-th:font-semibold
        prose-td:border-[var(--markdown-table-border)]
        prose-td:p-2 prose-td:text-[var(--markdown-text)]

        /* Checkbox styles */
        [type='checkbox']:text-[var(--markdown-checkbox-checked)]
        [type='checkbox']:border-[var(--markdown-checkbox-border)]
        [type='checkbox']:rounded
        [type='checkbox']:focus:ring-[var(--markdown-checkbox-focus)]"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};
