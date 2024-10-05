import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import { Button, TextField, Container, Typography, Grid, Box } from '@mui/material';

const AccountSettingsPage = () => {
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: token },
        };
        const response = await axios.get('https://taekwondochatbot-backend.onrender.com/api/auth/account', config);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: token },
      };
      const response = await axios.put(
        'https://taekwondochatbot-backend.onrender.com/api/auth/update-password',
        { newPassword },
        config
      );
      setSuccessMessage(response.data.message);
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Error updating password.');
    }
  };

  return (
    <div>
    <Navbar />
    <Container>
    <Typography variant="h3" gutterBottom sx={{color:"#D61F2E",fontWeight:'bold',mt:20}}>
        Account Settings
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              value={user.username || ""}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={user.email || ""}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
        <Button variant="contained" sx={{backgroundColor:'#D61F2E'}} onClick={handlePasswordChange}>
            Update Password
          </Button>
        </Box>
        {successMessage && <Typography color="success.main">{successMessage}</Typography>}
        {errorMessage && <Typography color="error.main">{errorMessage}</Typography>}
      </Box>
    </Container>
    </div>
  );
};

export default AccountSettingsPage;
