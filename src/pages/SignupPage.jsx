import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image2 from '../assets/signup.avif'

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://taekwondochatbot-backend.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); 
        navigate('/dashboard');  // Navigate after successful signup
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Error signing up');
    }
  };

  return (
    <div>
      <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false} 
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image2})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.grey[50],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
       
    
        <Grid item xs={12} sm={8} md={5} component={Box} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
           <Typography variant ="h2" sx={{color:"#D61F2E",fontWeight:'bold',mr:28}}> Sign Up</Typography>
          <Typography variant ="h8" sx={{color:"black",mt:3,mb:4}}>Get yourself registered to get your very own taekwondo assistant </Typography> 
      
      <Box component="form" sx={{ mt: 1, mx: 4, width: '100%', maxWidth: 400 }} onSubmit={handleSubmit}>
             <TextField
              margin="normal"
              required
              fullWidth
              label="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> 
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,backgroundColor:'#D61F2E'}}>
              Sign Up
            </Button>
            <Button fullWidth variant="text" onClick={() => navigate('/Login')}>
          <u>Login</u>
        </Button>
      </Box>
      </Grid>
      </Grid>
    </div>
  );
};

export default SignupPage;
