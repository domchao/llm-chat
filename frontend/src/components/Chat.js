import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GrowingTextArea from "./GrowingTextArea";
import UserMessage from "./chat/UserMessage";
import BotMessage from "./chat/BotMessage";
// import Sidebar from "./HiddenSidebar";
import Sidebar from "./sidebar/HiddenSidebar";

const Chat = ({ initialThreadId }) => {
    const [activeThread, setActiveThread] = useState(null);
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

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

    const fetchMessages = async (threadId) => {
        const response = await fetch(`/app/api/threads/${threadId}/messages/`);
        const data = await response.json();
        setMessages(data);
    };

    const sendMessage = async (text) => {
        if (!text.trim() || !activeThread) return;

        console.log(activeThread.id);

        const response = await fetch("/app/api/messages/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: text.trim(),
                thread: activeThread.id,
            }),
        });

        const data = await response.json();
        setMessages([...messages, ...data]);
    };

    return (
        <div className="relative w-full">
            {/* Sidebar is positioned fixed and will overlay content */}
            <Sidebar />

            {/* Main content takes full width */}
            <div className="chat-container flex flex-col items-center w-full max-w-3xl mx-auto px-4 min-h-screen">
                <div className="chat-main relative flex w-full flex-1 overflow-x-hidden overflow-y-scroll pt-6 md:pr-8">
                    <div className="relative mx-auto flex h-full w-full max-w-3xl flex-1 flex-col md:px-2">
                        <div className="flex-1 flex flex-col gap-3 px-4 max-w-3xl mx-auto w-full pt-1">
                            {messages.map((message) =>
                                message.is_bot ? (
                                    <BotMessage message={message.content} />
                                ) : (
                                    <UserMessage message={message.content} />
                                ),
                            )}
                        </div>
                    </div>
                </div>
                <div className="message-input sticky bottom-0 mx-auto w-full pt-6">
                    <GrowingTextArea onSubmit={sendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Chat;
