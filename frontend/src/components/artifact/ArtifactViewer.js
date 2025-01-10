import React, { useContext } from "react";
import { SidePanelContext } from "../../contexts/SidePanelContext";
import ArtifactButton from "./ArtifactButton";

const ArtifactViewer = ({ artifact }) => {
    const { setOpenArtifact } = useContext(SidePanelContext);

    return (
        <>
            <ArtifactButton
                artifact={artifact}
                onOpen={() => setOpenArtifact(artifact)}
            />
        </>
    );
};

export default ArtifactViewer;
