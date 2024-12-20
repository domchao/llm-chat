import React, { useState, useEffect } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const response = await fetch("/app/api/messages/");
        const data = await response.json();
        setMessages(data);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const response = await fetch("/app/api/messages/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: input }),
        });

        const data = await response.json();
        setMessages([...messages, ...data]);
        setInput("");
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`message ${message.is_bot ? "bot" : "user"}`}
                    >
                        <p>{message.content}</p>
                        <small>
                            {new Date(message.timestamp).toLocaleString()}
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
        </div>
    );
};

export default Chat;
