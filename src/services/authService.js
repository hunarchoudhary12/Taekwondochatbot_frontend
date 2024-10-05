import axios from 'axios';
import {jwtDecode} from "jwt-decode";

const getCurrentUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken;
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};

// New function to fetch user details from the backend
const getUserDetails = async () => {
    try {
        const response = await axios.get('https://taekwondochatbot-backend.onrender.com/api/auth/user-details', {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        return response.data; // Assuming this returns user details like email and username
    } catch (error) {
        console.error("Error fetching user details", error);
        return null;
    }
};

export default { getCurrentUser, getUserDetails };


