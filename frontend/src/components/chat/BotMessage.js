import React from "react";
import MessageContent from "./MessageContent";

const BotMessage = ({ message }) => {
    return (
        <div className="mb-1 mt-1">
            <div className="message-container-bot relative rounded-xl ml-px pl-2.5 py-2.5 break-words max-w-[75ch] flex-col pr-6">
                <MessageContent content={message} />
            </div>
        </div>
    );
};

export default BotMessage;
