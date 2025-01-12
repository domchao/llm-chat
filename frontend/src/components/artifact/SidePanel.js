import React from "react";
import { Copy, X } from "lucide-react";
import { CodeRenderer } from "./types/CodeRenderer";
import { MarkdownRenderer } from "./types/MarkdownRenderer";
import { SVGRenderer } from "./types/SVGRenderer";
import { useContext, useState } from "react";
import { SidePanelContext } from "../../contexts/SidePanelContext";

export const SidePanel = ({ artifact }) => {
    const { setOpenArtifact } = useContext(SidePanelContext);
    const [copied, setCopied] = useState(false);

    const renderContent = () => {
        switch (artifact.type) {
            case "application/vnd.code":
                return <CodeRenderer content={artifact.content} />;
            case "text/markdown":
                return <MarkdownRenderer content={artifact.content} />;
            case "image/svg+xml":
                return <SVGRenderer content={artifact.content} />;
            default:
                return null;
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(artifact.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex-1 relative">
            <div className="sidepanel-container absolute right-0 bottom-0 h-5/6 md:w-[calc(50vw-2.5rem)] flex flex-col transform transition-all ease-in-out rounded-xl">
                {/* Header */}
                <div className="sidepannel-header flex items-center justify-between p-4 border-b">
                    <div className="flex-1 min-w-0">
                        <h2 className="font-semibold">{artifact.title}</h2>
                        <p className="text-sm">ID: {artifact.identifier}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                        <button
                            onClick={handleCopy}
                            className="sidepanel-button p-2 rounded-md transition-colors"
                            title="Copy content"
                        >
                            <Copy size={16} />
                            <span className="sr-only">Copy content</span>
                        </button>
                        <button
                            onClick={() => setOpenArtifact(false)}
                            className="sidepanel-button p-2 rounded-md transition-colors"
                            title="Close"
                        >
                            <X size={16} />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-4">
                    {renderContent()}
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
