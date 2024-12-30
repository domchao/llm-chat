import React from "react";

const ThreadList = ({ threads, activeThread, onThreadSelect, onNewThread }) => {
    return (
        <div className="thread-list">
            <button onClick={onNewThread} className="new-thread-btn">
                New Chat
            </button>
            {threads.map((thread) => (
                <div
                    key={thread.id}
                    className={`thread-item ${
                        activeThread?.id === thread.id ? "active" : ""
                    }`}
                    onClick={() => onThreadSelect(thread)}
                >
                    <h3>{thread.title}</h3>
                    <p>{thread.last_message?.content}</p>
                    <small>
                        {new Date(thread.last_message_at).toLocaleString()}
                    </small>
                </div>
            ))}
        </div>
    );
};

export default ThreadList;
