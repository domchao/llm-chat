import React, { useState } from "react";
import ThreadList from "./Threadlist";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const width = isExpanded ? "w-72" : isHovered ? "w-72" : "w-[72px]";
    const contentOpacity = isExpanded
        ? "opacity-100"
        : isHovered
          ? "opacity-50"
          : "opacity-0";

    return (
        <nav
            className={`fixed left-0 top-0 h-screen shadow-lg transition-colors duration-300 z-50 ${width}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="h-full flex flex-col w-72 p-4">
                <div className="flex items-center h-12">
                    <span className="font-medium">Chats</span>
                </div>
                <div
                    className={`flex-1 transition-opacity duration-300 ${contentOpacity}`}
                >
                    <ThreadList />
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
