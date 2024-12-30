import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate,
} from "react-router-dom";
import Chat from "./components/Chat";

const ChatWrapper = () => {
    const { threadId } = useParams();
    return <Chat initialThreadId={threadId} />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/t/:threadId" element={<ChatWrapper />} />
                <Route path="/" element={<Chat />} />
            </Routes>
        </Router>
    );
};

export default App;
