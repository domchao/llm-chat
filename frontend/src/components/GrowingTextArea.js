import React, { useState, useRef, useEffect } from "react";

const GrowingTextArea = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        adjustHeight();
    }, [text]);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSubmit(text);
            setText("");
        }
    };

    return (
        <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="initial-input w-full min-h-[40px] max-h-[300px] p-2 border rounded-xl resize-none overflow-hidden overflow-y-scroll"
            placeholder="Type your message..."
        />
    );
};

export default GrowingTextArea;
