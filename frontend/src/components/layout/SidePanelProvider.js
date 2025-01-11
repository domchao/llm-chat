import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidePanelContext } from "../../contexts/SidePanelContext";
import { SidePanel } from "../artifact/SidePanel";

const SidePanelNavigationHandler = ({ children }) => {
    const location = useLocation();
    const { setOpenArtifact } = useContext(SidePanelContext);

    useEffect(() => {
        // Close any open sidepanel when the location changes
        setOpenArtifact(null);
    }, [location, setOpenArtifact]);

    return children;
};

const SidePanelProvider = ({ children }) => {
    const [openArtifact, setOpenArtifact] = useState(null);

    return (
        <SidePanelContext.Provider value={{ openArtifact, setOpenArtifact }}>
            <SidePanelNavigationHandler>
                <div
                    className={`flex h-screen ${
                        openArtifact ? "ml-16" : "ml-0]"
                    }`}
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
            </SidePanelNavigationHandler>
        </SidePanelContext.Provider>
    );
};

export default SidePanelProvider;
