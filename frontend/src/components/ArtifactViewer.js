import React, { useState } from "react";
import { X, ExternalLink, Copy } from "lucide-react";

// Main button component that appears in the chat
const ArtifactButton = ({ artifact, onOpen }) => {
    return (
        <div className="flex items-center gap-2 my-2">
            <button
                onClick={onOpen}
                className="artifact-button inline-flex items-center gap-2 px-4 py-2 rounded-md"
            >
                <ExternalLink size={16} />
                Open{" "}
                {artifact.type === "application/vnd.ant.code"
                    ? "code"
                    : "artifact"}
            </button>
            <span className="text-sm text-gray-600">{artifact.title}</span>
        </div>
    );
};

// Popout window component
const ArtifactPopout = ({ artifact, onClose }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(artifact.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div>
                        <h2 className="font-semibold">{artifact.title}</h2>
                        <p className="text-sm text-gray-600">
                            ID: {artifact.identifier}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                            title="Copy content"
                        >
                            <Copy size={16} />
                            <span className="sr-only">Copy content</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                            title="Close"
                        >
                            <X size={16} />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-4">
                    {artifact.type === "application/vnd.ant.code" && (
                        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                            <code>{artifact.content}</code>
                        </pre>
                    )}
                    {artifact.type === "text/markdown" && (
                        <div className="prose max-w-none">
                            {artifact.content}
                        </div>
                    )}
                    {artifact.type === "image/svg+xml" && (
                        <div className="flex justify-center">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: artifact.content,
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Copy feedback */}
                {copied && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md">
                        Copied to clipboard!
                    </div>
                )}
            </div>
        </div>
    );
};

// Main component that manages state and renders both components
const ArtifactViewer = ({ artifact }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ArtifactButton
                artifact={artifact}
                onOpen={() => setIsOpen(true)}
            />
            {isOpen && (
                <ArtifactPopout
                    artifact={artifact}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default ArtifactViewer;
