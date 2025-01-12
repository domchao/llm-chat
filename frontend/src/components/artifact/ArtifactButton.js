import React from "react";
import { ExternalLink } from "lucide-react";

const ArtifactButton = ({ artifact, onOpen }) => {
    return (
        <div className="flex items-center gap-2 my-2">
            <button
                onClick={onOpen}
                className="artifact-button inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm"
            >
                <ExternalLink size={16} />
                <span>
                    Open{" "}
                    {artifact.type === "application/vnd.code"
                        ? "code"
                        : "artifact"}
                    : {artifact.title}
                </span>
            </button>
        </div>
    );
};

export default ArtifactButton;
