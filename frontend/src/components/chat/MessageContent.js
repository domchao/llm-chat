import React from "react";
import ArtifactViewer from "../artifact/ArtifactViewer";

const parseMessageContent = (content) => {
    if (!content) return [{ type: "text", content: "" }];

    const parts = [];
    let currentIndex = 0;
    const artifactRegex = /<chatArtifact\s+([^>]*)>([\s\S]*?)<\/chatArtifact>/g;

    try {
        // Convert string to String object to ensure matchAll is available
        const contentStr = String(content);
        const matches = Array.from(contentStr.matchAll(artifactRegex));

        if (!matches.length) {
            return [{ type: "text", content: contentStr }];
        }

        for (const match of matches) {
            const [fullMatch, attributesStr, artifactContent] = match;
            const startIndex = match.index;

            if (startIndex > currentIndex) {
                const textContent = contentStr.slice(currentIndex, startIndex);
                if (textContent.trim()) {
                    parts.push({
                        type: "text",
                        content: textContent,
                    });
                }
            }

            const attributes = {};
            const attributeRegex = /(\w+)="([^"]*)"/g;
            let attrMatch;
            while ((attrMatch = attributeRegex.exec(attributesStr)) !== null) {
                attributes[attrMatch[1]] = attrMatch[2];
            }

            parts.push({
                type: "artifact",
                attributes,
                content: artifactContent?.trim() || "",
            });

            currentIndex = startIndex + fullMatch.length;
        }

        if (currentIndex < contentStr.length) {
            const remainingContent = contentStr.slice(currentIndex);
            if (remainingContent.trim()) {
                parts.push({
                    type: "text",
                    content: remainingContent,
                });
            }
        }

        console.log("Parsed parts:", parts);
        return parts;
    } catch (error) {
        console.error("Error parsing message:", error);
        return [{ type: "text", content: String(content) }];
    }
};

const MessageContent = ({ content }) => {
    const parts = React.useMemo(() => parseMessageContent(content), [content]);

    return (
        <div className="message-content">
            {parts.map((part, index) => {
                if (part.type === "artifact") {
                    return (
                        <ArtifactViewer
                            key={`artifact-${index}`}
                            artifact={{
                                identifier: part.attributes?.identifier,
                                type: part.attributes?.type,
                                title: part.attributes?.title,
                                content: part.content,
                            }}
                        />
                    );
                }

                // Add whitespace preservation for text content
                return (
                    <span
                        key={`text-${index}`}
                        style={{ whiteSpace: "pre-wrap" }}
                    >
                        {part.content}
                    </span>
                );
            })}
        </div>
    );
};

export default MessageContent;
