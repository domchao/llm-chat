import React from "react";

export const SVGRenderer = ({ content }) => (
    <div className="flex justify-center">
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
);
