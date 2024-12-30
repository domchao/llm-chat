import React, { useState, useEffect } from "react";
import ThreadList from "./ThreadList";

const Chat = () => {
    const [threads, setThreads] = useState([]);
    const [activeThread, setActiveThread] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchThreads();
    }, []);

    useEffect(() => {
        if (activeThread) {
            fetchMessages(activeThread.id);
        }
    }, [activeThread]);

    const fetchThreads = async () => {
        const response = await fetch("/app/api/threads/");
        const data = await response.json();
        setThreads(data);
    };

    const fetchMessages = async (threadId) => {
        const response = await fetch(`/app/api/threads/${threadId}/messages/`);
        const data = await response.json();
        setMessages(data);
    };

    const createNewThread = async () => {
        const response = await fetch("/app/api/threads/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "New Chat " + new Date().toLocaleTimeString(),
            }),
        });
        const newThread = await response.json();
        setThreads([newThread, ...threads]);
        setActiveThread(newThread);
        setMessages([]);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || !activeThread) return;

        const response = await fetch("/app/api/messages/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: input,
                thread: activeThread.id,
            }),
        });

        const data = await response.json();
        setMessages([...messages, ...data]);
        setInput("");

        // Refresh threads to update last message
        fetchThreads();
    };

    return (
        <div className="chat-container">
            <ThreadList
                threads={threads}
                activeThread={activeThread}
                onThreadSelect={setActiveThread}
                onNewThread={createNewThread}
            />
            <div className="chat-main">
                {activeThread ? (
                    <>
                        <div className="messages">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`message ${
                                        message.is_bot ? "bot" : "user"
                                    }`}
                                >
                                    <p>{message.content}</p>
                                    <small>
                                        {new Date(
                                            message.timestamp,
                                        ).toLocaleString()}
                                    </small>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={sendMessage}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                            />
                            <button type="submit">Send</button>
                        </form>
                    </>
                ) : (
                    <div className="no-thread-selected">
                        <p>
                            Select a chat or create a new one to start messaging
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
