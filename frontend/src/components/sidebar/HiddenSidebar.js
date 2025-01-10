import React, { useState } from "react";
import ThreadList from "./Threadlist";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const width = isExpanded ? "w-72" : isHovered ? "w-72" : "w-16";
    const contentOpacity = isExpanded
        ? "opacity-100"
        : isHovered
          ? "opacity-50"
          : "opacity-0";

    return (
        <nav
            className={`fixed left-0 top-0 h-screen shadow-lg transition-all duration-300 backdrop-blur rounded-xl z-50 ${width}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`h-full flex flex-col ${width} p-4 gap-6 overflow-hidden`}
            >
                <div className="flex items-center h-12 min-w-max">
                    <span className="font-medium">Chats</span>
                </div>
                <div
                    className={`transition-opacity duration-300 h-12 min-w-max ${contentOpacity}`}
                >
                    <a
                        href="/"
                        className="flex items-center rounded-xl hover:bg-black px-4 py-2"
                    >
                        Start a new chat
                    </a>
                </div>
                <div
                    className={`transition-opacity overflow-y-scroll duration-300 min-w-max ${contentOpacity}`}
                >
                    <ThreadList />
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
