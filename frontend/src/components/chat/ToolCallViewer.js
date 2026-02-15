import React, { useState } from "react";
import { Search, Globe, ChevronDown, ChevronRight } from "lucide-react";

const ToolCallViewer = ({ toolCall }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Select icon based on tool name
    const getToolIcon = (name) => {
        if (name === "WebSearch") return <Search className="w-4 h-4" />;
        if (name === "WebFetch") return <Globe className="w-4 h-4" />;
        return <Globe className="w-4 h-4" />;
    };

    // Format tool name for display
    const formatToolName = (name) => {
        if (name === "WebSearch") return "Web Search";
        if (name === "WebFetch") return "Web Fetch";
        return name;
    };

    return (
        <div className="tool-call-container mb-2 rounded-lg bg-gray-100 overflow-hidden">
            <button
                className="tool-call-header w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 transition-colors text-left"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {getToolIcon(toolCall.name)}
                <span className="font-medium text-sm text-gray-700">
                    {formatToolName(toolCall.name)}
                </span>
                <div className="ml-auto">
                    {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                </div>
            </button>

            {isExpanded && (
                <div className="tool-call-details px-3 py-2 bg-gray-50 border-t border-gray-200">
                    <div className="tool-input mb-2">
                        <div className="text-xs font-semibold text-gray-600 mb-1">
                            Input:
                        </div>
                        <pre className="text-xs font-mono bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                            {JSON.stringify(toolCall.input, null, 2)}
                        </pre>
                    </div>
                    <div className="tool-result">
                        <div className="text-xs font-semibold text-gray-600 mb-1">
                            Result:
                        </div>
                        <div
                            className={`text-xs p-2 rounded border ${
                                toolCall.is_error
                                    ? "bg-red-50 border-red-200 text-red-800"
                                    : "bg-white border-gray-200"
                            }`}
                            style={{ whiteSpace: "pre-wrap" }}
                        >
                            {toolCall.result || "No result"}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToolCallViewer;
