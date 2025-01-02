import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThreadList = () => {
    const [threads, setThreads] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchThreads();
    }, []);

    const fetchThreads = async () => {
        const response = await fetch("/app/api/threads/");
        const data = await response.json();
        setThreads(data);
    };

    const handleThreadSelect = (thread) => {
        navigate(`/t/${thread.id}`);
    };

    return (
        <div className="thread-list">
            {threads.map((thread) => (
                <div
                    className="space-y-2 mt-4"
                    onClick={() => handleThreadSelect(thread)}
                >
                    <div className="flex items-center space-x-3">
                        <span className="w-full">{thread.title}</span>
                    </div>
                    {/* <p>{thread.last_message?.content}</p> */}
                    <small>
                        {new Date(thread.last_message_at).toLocaleString()}
                    </small>
                </div>
            ))}
        </div>
    );
};

export default ThreadList;
