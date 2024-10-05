import React from "react";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainImage from '../assets/main_pic.webp';
import injury from '../assets/bandaged.jpeg';
import match from '../assets/match_analysis.jpeg';
import move from '../assets/move_learning.jpeg';
import train from '../assets/training.avif';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            <Navbar />
            <Container maxWidth="false">
                <Box
                    component="section"
                    sx={{
                        height: "100vh",
                        position: "relative", // Make the parent box relative
                        overflow: "hidden", // Prevent overflow of content
                    }}
                >
                    {/* Background Image with Blur */}
                    <Box
                        sx={{
                            height: "100vh",
                            backgroundImage: `url(${MainImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            filter: "blur(5px)", // Apply blur effect
                            position: "absolute", // Position absolutely
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 0, // Place behind other elements
                        }}
                    />

                    {/* Overlay for better text visibility */}
                    <Box
                        sx={{
                            position: "absolute", // Position the overlay absolutely
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
                            zIndex: 1, // Ensure it's above the blurred image
                        }}
                    />

                    <Grid
                        container
                        direction="row"
                        sx={{
                            height: "100vh",
                            justifyContent: "center",
                            zIndex: 2, // Ensure content is above overlay
                            position: "relative", // Position relative to overlay
                        }}
                    >
                        <Grid item xs={12} sx={{ ml: 5 }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    ml: 5,
                                    mt: 10,
                                    fontWeight: "bold",
                                    color: "white", // Change text color for visibility
                                }}
                            >
                                GET YOUR VERY OWN <br /> TAEKWONDO <br /> ASSISTANT
                            </Typography>
                        </Grid>

                        {/* Subheadline */}
                        <Grid item xs={12} sx={{ ml: 10 }}>
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{
                                    fontWeight: "bold",
                                    color: "white", // Change text color for visibility
                                }}
                            >
                                Your personal guide to mastering Taekwondo moves and strategies
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sx={{ ml: 10 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ backgroundColor: 'red' }}
                                onClick={() => navigate('/signup')}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* Features Section */}
            <Container maxWidth="false" sx={{ mt: 5 }}>
                <Typography variant="h3" component="h4" sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}>
                    Features
                </Typography>

                <Grid container spacing={1}>
                    {/* Card 1 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                            <Card sx={{ mb: 3, backgroundColor: '#3A3C43', color: 'white', height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
                                        Match Analysis
                                    </Typography>
                                    <Typography variant="body2">
                                    Analyse a sequence of moves in a match - point out mistakes and suggest potential moves 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={match}
                                alt="Match Analysis"
                                sx={{ width: "100%", height: '100%', objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                            <Card sx={{ mb: 3, backgroundColor: '#3A3C43', color: 'white', height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
                                       Preliminary teaching of a move
                                    </Typography>
                                    <Typography variant="body2">
                                    Learn the basics of taekwondo with a step-by-step guide to mastering essential kicks and strikes.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={move}
                                alt="User Conversation"
                                sx={{ width: "100%", height: '100%', objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>

                    {/* Card 3 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                            <Card sx={{ mb: 3, backgroundColor: '#3A3C43', color: 'white', height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
                                        Injury Healing Suggestion
                                    </Typography>
                                    <Typography variant="body2">
                                    Discover effective home remedies and exercises to aid in the healing of common injuries
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={injury}
                                alt="Injury Healing Suggestion"
                                sx={{ width: "100%", height: '100%', objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>

                    {/* Card 4 */}
                    <Grid item xs={12} md={6} sx={{ alignItems: 'stretch' }}>
                        <Grid item xs={12}>
                            <Card sx={{ mb: 3, backgroundColor: '#3A3C43', color: 'white', height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
                                        Training Regime
                                    </Typography>
                                    <Typography variant="body2">
                                    Boost your fitness with a tailored taekwondo and strength training regimen, combining agility, technique.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={train}
                                alt="Training Regime"
                                sx={{ width: "100%", height: '100%', objectFit: "cover" }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Call to Action */}
            <Container maxWidth="false" sx={{ mt: 15 }}>
                <Typography variant="h3" component="h4" sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}>
                    Start your journey with your personal Taekwondo instructor
                </Typography>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ backgroundColor: '#D61F2E', color: 'white' }}
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </Button>
                </Grid>
            </Container>

            {/* FAQ Section */}
            <Container maxWidth="false" sx={{ mt: 15 }}>
                <Typography variant="h3" component="h4" sx={{ textAlign: "center", mb: 5, fontWeight: "bold", color: '#D61F2E' }}>
                    FREQUENTLY ASKED QUESTIONS
                </Typography>

                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} md={6}>
                        {/* Manual FAQ Entries */}
                        <Accordion sx={{ backgroundColor: '#D61F2E', color: 'white' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                                <Typography>Can the assistant teach me patterns? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes, the assistant can teach you Taekwondo patterns in a fundamental manner. It can also provide you with some website recommendations to help with your learning.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ backgroundColor: '#D61F2E', color: 'white' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                                <Typography>Does the chatbot teach WTF or ITF style taekwondo?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                It can teach both WTF (World Taekwondo Federation) and ITF (International Taekwondo Federation) styles of Taekwondo, depending on your preference.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ backgroundColor: '#D61F2E', color: 'white' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                                <Typography>Does match analysis take tournament scores into account?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes, match analysis does take tournament scores into account. Evaluating tournament scores is essential for understanding an athlete's performance, as it provides insights into scoring efficiency, areas of strength, and aspects that need improvement.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ backgroundColor: '#D61F2E', color: 'white' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                                <Typography>Can I access my conversation history?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Yes, you can access your conversation history. This allows you to revisit previous discussions, track your learning progress, and refer back to the insights or suggestions shared during earlier interactions.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>


            <Footer />
        </div>
    );
};

export default LandingPage;
