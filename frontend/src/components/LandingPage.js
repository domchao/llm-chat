import React from "react";
import { useNavigate } from "react-router-dom";
import GrowingTextArea from "./GrowingTextArea";

const LandingPage = () => {
    const sendMessage = async (text, thread) => {
        if (!text.trim()) return;

        const response = await fetch("/app/api/messages/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: text,
                thread: thread,
            }),
        });

        const data = await response.json();
    };

    const navigate = useNavigate();

    const handleSubmit = async (text) => {
        if (!text.trim()) return;

        const response = await fetch("/app/api/threads/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: text.trim() }),
        });

        const thread = await response.json();
        sendMessage(text, thread.id);
        navigate(`/t/${thread.id}`);
    };

    return (
        <div className="landing-container min-h-full w-full min-w-0 flex-1">
            <main class="mx-auto mt-4 w-full max-w-7xl flex-1 px-4 pb-20 md:pl-8 lg:mt-6 min-h-screen-w-scroll !mt-0 flex flex-col items-center gap-8 pt-12 md:pr-14 2xl:pr-20">
                <div className="text-input top-5 mx-auto w-full max-w-2xl md:sticky">
                    <form>
                        <div class="flex  flex-col  bg-bg-000  gap-1.5  border-0.5  border-border-300  pl-4  pt-2.5  pr-2.5  pb-2.5  sm:mx-0  items-stretch  transition-all  duration-200  relative  shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.035)]  focus-within:shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)]  focus-within:border-border-200  cursor-text  z-10 rounded-2xl">
                            <GrowingTextArea onSubmit={handleSubmit} />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
