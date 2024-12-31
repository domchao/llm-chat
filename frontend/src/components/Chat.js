import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThreadList from "./ThreadList";

const Chat = ({ initialThreadId }) => {
    const [threads, setThreads] = useState([]);
    const [activeThread, setActiveThread] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchThreads();
    }, []);

    useEffect(() => {
        if (initialThreadId) {
            fetchThreadById(initialThreadId);
        }
    }, [initialThreadId]);

    const fetchThreadById = async (threadId) => {
        try {
            const response = await fetch(`/app/api/threads/${threadId}/`);
            if (response.ok) {
                const thread = await response.json();
                setActiveThread(thread);
                fetchMessages(threadId);
            } else {
                navigate("/"); // Redirect to home if thread not found
            }
        } catch (error) {
            console.error("Error fetching thread:", error);
            navigate("/");
        }
    };

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
        navigate(`/t/${newThread.id}`);
    };

    const handleThreadSelect = (thread) => {
        setActiveThread(thread);
        navigate(`/t/${thread.id}`);
        fetchMessages(thread.id);
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
        fetchThreads();
    };

    return (
        <div className="chat-container flex flex-col items-center w-full max-w-3xl mx-auto px-4">
            <ThreadList
                threads={threads}
                activeThread={activeThread}
                onThreadSelect={handleThreadSelect}
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
