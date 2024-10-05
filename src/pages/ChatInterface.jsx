import React, { useState, useEffect } from "react";
import { Container, Box, Button, TextField, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // For user and assistant icons
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import authService from "../services/authService";

const ChatInterface = () => {
    const [userMessage, setUserMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    
    const systemPrompt = "You are a Taekwondo instructor who helps students with match analysis, injury healing suggestions, preparing a training regime, and a preliminary teaching of a technique. You need to ask the experience level of the student first. You will only answer Taekwondo related queries, also keep the responses concise and flexible with choices. Include a warning that the injury healing suggestion may not work in all cases and to consult a professional. Include YouTube links for teaching a technique or while suggesting a training regime for exercises. Provide positive feedback after each reply of the user to keep them engaged.";

    // Load the current user when component mounts
    useEffect(() => {
        const user = authService.getCurrentUser(); // Get current logged-in user info (userId or email)
        if (user) {
            setCurrentUser(user);

            // Load chat history for this specific user from localStorage
            const savedChatHistory = JSON.parse(localStorage.getItem(`chatHistory_${user.userId}`));
            if (savedChatHistory) {
                setChatHistory(savedChatHistory);
            }
        }

        // Initiate conversation with the system prompt
        const initiateConversation = async () => {
            if (user) {
                const response = await fetch('https://taekwondochatbot-backend.onrender.com/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: systemPrompt,
                        history: [] // Start with an empty history
                    }),
                });

                const data = await response.json();
                if (data.reply) {
                    const initialHistory = [{ role: "assistant", content: data.reply }];
                    setChatHistory(initialHistory);
                    localStorage.setItem(`chatHistory_${user.userId}`, JSON.stringify(initialHistory));
                }
            }
        };

        initiateConversation();
    }, []);

    const handleSendMessage = async () => {
        if (!userMessage.trim()) return;

        // Add user's message to chat history
        const updatedHistory = [...chatHistory, { role: "user", content: userMessage }];

        try {
            const response = await fetch('https://taekwondochatbot-backend.onrender.com/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    history: updatedHistory.filter(chat => chat.role === "user" || chat.role === "assistant")
                }),
            });

            const data = await response.json();
            if (data.reply) {
                // Add assistant's reply to chat history
                const finalHistory = [...updatedHistory, { role: "assistant", content: data.reply }];
                
                // Update chat history state and save it to localStorage for this specific user
                setChatHistory(finalHistory);
                localStorage.setItem(`chatHistory_${currentUser.userId}`, JSON.stringify(finalHistory));
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }

        setUserMessage(""); // Clear the input field after sending
    };

    // Function to handle pressing Enter to send the message
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    const renderMessageContent = (content) => {
        const regex = /(https?:\/\/[^\s]+)/g; // Match URLs
        const parts = content.split(regex);
        return parts.map((part, index) => {
            if (regex.test(part)) {
                return (
                    <a key={index} href={part} target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div>
            <Navbar />
            <Container>
                {/* Back Button */}
                <IconButton onClick={() => navigate('/dashboard')} sx={{ mt: 2 }}>
                    <ArrowBackIcon />
                </IconButton>

                {/* Main Chat Container */}
                <Box 
                    sx={{ 
                        height: "70vh", 
                        overflowY: "scroll", 
                        p: 2, 
                        border: "1px solid #ccc", 
                        mt: 2, 
                        display: "flex", 
                        flexDirection: "column",
                        justifyContent: "flex-end" // Align chat bubbles at the bottom
                    }}
                >
                    {chatHistory.map((message, index) => (
                        <Box 
                            key={index} 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start', 
                                mb: 2,
                                alignItems: 'center' // Align icons and messages
                            }}
                        >
                            {message.role === 'assistant' && (
                                <AccountCircleIcon sx={{ fontSize: 40, mr: 1 }} /> // Assistant logo on left
                            )}
                            
                            <Box 
                                sx={{ 
                                    maxWidth: "60%", 
                                    p: 2, 
                                    borderRadius: 2, 
                                    backgroundColor: message.role === 'user' ? '#f1f0f0' : '#d61f2e', 
                                    color: message.role === 'user' ? 'black' : 'white',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span>{renderMessageContent(message.content)}</span>
                            </Box>
                            
                            {message.role === 'user' && (
                                <AccountCircleIcon sx={{ fontSize: 40, ml: 1 }} /> // User logo on right
                            )}
                        </Box>
                    ))}
                </Box>

                {/* Chat Input Container */}
                <Box 
                    sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        mt: 2, 
                        border: "1px solid #ccc", 
                        borderRadius: 2, 
                        p: 1 
                    }}
                >
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyPress={handleKeyPress} // Listen for Enter key press
                        placeholder="Type your message..."
                        sx={{ flexGrow: 1 }}
                    />
                    <IconButton 
                        onClick={handleSendMessage} 
                        sx={{ 
                            backgroundColor: '#D61F2E', 
                            color: 'white', 
                            ml: 2 
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Box>
            </Container>
        </div>
    );
};

export default ChatInterface;
