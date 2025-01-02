import React from "react";

const UserMessage = ({ message }) => {
    return (
        <div className="mb-1 mt-1">
            <div className="message-container-user relative rounded-xl inline-block ml-px pl-2.5 py-2.5 break-words max-w-[75ch] flex-col pr-6">
                <p className="whitespace-pre-wrap break-words">{message}</p>
            </div>
        </div>
    );
};

export default UserMessage;
