import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import Chat from "./components/Chat";
import LandingPage from "./components/LandingPage";
import "./styles/app.css";
import "./styles/globals.css";

const ChatWrapper = () => {
    const { threadId } = useParams();
    return <Chat initialThreadId={threadId} />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/t/:threadId" element={<ChatWrapper />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    );
};

export default App;
