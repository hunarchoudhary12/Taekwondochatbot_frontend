import React from 'react';
import { Typography, Button, Container, Box, Grid, Card, CardContent } from '@mui/material';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate('/chat'); // Navigates to the chat interface
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 10 }}>
        {/* Main Typography */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: '#D61F2E',
            mb: 4, // Adds space below the typography
          }}
        >
          Make a conversation with your instructor
        </Typography>

        {/* Button Section */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#D61F2E',
              color: 'white',
              fontSize: '1.2rem', // Increases button text size
              padding: '12px 24px', // Adjusts padding for larger button
            }}
            onClick={handleStartChat}
          >
            Start the Chat
          </Button>
        </Box>

        {/* Features Headline */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: '#D61F2E',
            mt: 8, // Adds space above the headline
            mb: 4, // Adds space below the headline
          }}
        >
          Features
        </Typography>
        {/* Features Section */}
        <Container maxWidth="false" sx={{ mt: 5 }}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Card 1 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                                 <Card
                                  sx={{
                                    backgroundColor: '#8B8B8B',
                                    textAlign: 'center',
                                    height: '250px', // Adjust height for larger card
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Center content vertically
                                  }}
                                >
                                <CardContent>
                                        <Typography
                                          variant="h5"
                                          component="div"
                                          sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '1.5rem', // Increase font size for larger text
                                          }}
                                        >
                                        Match Analysis
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                                    Evaluate an athlete's performance by reviewing techniques, strategies, scoring efficiency, and decision-making during a match.  Identify strengths, weaknesses, and suggest next best moves to help refine training and improve future performance.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                                 <Card
                                  sx={{
                                    backgroundColor: '#8B8B8B',
                                    textAlign: 'center',
                                    height: '250px', // Adjust height for larger card
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Center content vertically
                                  }}
                                >
                                <CardContent>
                                        <Typography
                                          variant="h5"
                                          component="div"
                                          sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '1.5rem', // Increase font size for larger text
                                          }}
                                        >
                                        Training Regime
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                                    Develop a structured plan that includes a mix of exercises and drills focused on building strength, flexibility, endurance, and technical skills. This plan incorporates sparring, patterns practice, conditioning, and mental preparation, tailored to the athlete's goals and skill level.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Card 3 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                                 <Card
                                  sx={{
                                    backgroundColor: '#8B8B8B',
                                    textAlign: 'center',
                                    height: '250px', // Adjust height for larger card
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Center content vertically
                                  }}
                                >
                                <CardContent>
                                        <Typography
                                          variant="h5"
                                          component="div"
                                          sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '1.5rem', // Increase font size for larger text
                                          }}
                                        >
                                        Injury Healing
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                                    Provide guidance on recovery strategies, such as rest, ice, compression, and elevation (RICE), along with recommended stretches and strengthening exercises to aid healing.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Card 4 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                                 <Card
                                  sx={{
                                    backgroundColor: '#8B8B8B',
                                    textAlign: 'center',
                                    height: '250px', // Adjust height for larger card
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Center content vertically
                                  }}
                                >
                                <CardContent>
                                        <Typography
                                          variant="h5"
                                          component="div"
                                          sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '1.5rem', // Increase font size for larger text
                                          }}
                                        >
                                        Preliminary Teaching of a Move
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                                    Break down the technique into fundamental components, such as stance, body positioning, balance, and motion. Provide step-by-step instructions, often demonstrating or linking to visual examples.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
