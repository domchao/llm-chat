import React, { useState } from "react";
import { SidePanelContext } from "../../contexts/SidePanelContext";
import { SidePanel } from "../artifact/SidePanel";

const SidePanelProvider = ({ children }) => {
    const [openArtifact, setOpenArtifact] = useState(null);

    return (
        <SidePanelContext.Provider value={{ openArtifact, setOpenArtifact }}>
            <div
                className={`flex h-screen ${openArtifact ? "ml-16" : "ml-0]"}`}
            >
                <div
                    className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${
                        openArtifact ? "w-7/12" : "w-full"
                    }`}
                >
                    {children}
                </div>
                {openArtifact && <SidePanel artifact={openArtifact} />}
            </div>
        </SidePanelContext.Provider>
    );
};

export default SidePanelProvider;
