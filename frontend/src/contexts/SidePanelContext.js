import { createContext } from "react";

export const SidePanelContext = createContext({
    openArtifact: null,
    setOpenArtifact: () => {},
});
