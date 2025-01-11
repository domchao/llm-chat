import React from "react";

export const CodeRenderer = ({ content }) => (
    <pre className="sidepanel-code-renderer p-4 rounded-md overflow-x-auto">
        <code>{content}</code>
    </pre>
);
