import React, { useState, useEffect } from 'react';
import Navbar from '../Main/NavBar';
import Footer from '../Main/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 200,
    width: 350,
  },
  carousel: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '700px',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    padding: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  },
  prevArrow: {
    left: theme.spacing(2),
  },
  nextArrow: {
    right: theme.spacing(2),
  },
  description: {
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: theme.spacing(2),
    width: '85%',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep === carouselImages.length - 1 ? 0 : prevStep + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrevSlide = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? carouselImages.length - 1 : prevStep - 1));
  };

  const handleNextSlide = () => {
    setActiveStep((prevStep) => (prevStep === carouselImages.length - 1 ? 0 : prevStep + 1));
  };

  const carouselImages = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1569496736555-47c448d556f7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Typography style={{ paddingTop: '60px' }} variant="h2" align="center" className={classes.title}>
          Welcome to Profinit
          <hr style={{ width: '600px' }}></hr>
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={'auto'} >
            <div className={classes.carousel}>
              <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
                {carouselImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Carousel Image ${index + 1}`} className={classes.carouselImage} />
                  </div>
                ))}
              </SwipeableViews>
              <Typography variant="body1" className={classes.description} align="center">
                <Typography variant="h4" component="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                  Profinit
                </Typography>
                <Typography variant="body1" style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>

                  Profitni – where social media transcends the ordinary. Step into a world where connections are meaningful, conversations are authentic, and positivity reverberates through every interaction. Our platform is designed to prioritize quality over quantity, fostering genuine connections and enriching experiences. With innovative features like Echo, personalized content feeds, and robust privacy controls, environment offers a new paradigm in social networking. Join us today and embark on a journey where meaningful connections thrive and authenticity reigns supreme. Welcome to the future of social media.
                </Typography>
              </Typography>

              <IconButton className={`${classes.arrow} ${classes.prevArrow}`} onClick={handlePrevSlide}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton className={`${classes.arrow} ${classes.nextArrow}`} onClick={handleNextSlide}>
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <hr />
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="IT"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Samson John
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    "The innovative Echo feature on Environment is a game-changer. It's incredible to see how user engagement is amplified, spreading positivity and meaningful content throughout the community."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Business"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nathan Cams
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    "As a business owner, I appreciate how Environment fosters genuine connections and meaningful interactions. It's refreshing to see a social media platform prioritize quality over quantity
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3760376/pexels-photo-3760376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Business"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Shawn Mendes
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    "Environment's personalized content feeds are spot-on! As someone in the business field, I'm impressed by how accurately it tailors content to match my interests and preferences."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <hr />
        <Typography variant="body1" style={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#eeeeee' }} align="center">
          <Typography variant="h4" component="h3" gutterBottom style={{ fontWeight: 'bold' }}>
            Profinit Life
            <hr style={{ width: '500px', }}></hr>
          </Typography>
          <Typography variant="body1" style={{ fontSize: '1.2rem', fontWeight: 'lighter' }}>
            Profitni Life – your gateway to a world where financial empowerment meets personal fulfillment. We believe that true prosperity encompasses more than just wealth; it's about achieving balance and fulfillment in every aspect of life. At Profitni Life, we're dedicated to providing you with the tools, resources, and insights to unlock your full potential and live a life of abundance on your own terms. From financial strategies and investment tips to wellness practices and personal development, we're here to support you on your journey to success and fulfillment. Join us as we redefine what it means to live a profitable life – one that's rich in purpose, passion, and prosperity.    </Typography>
        </Typography>
        <hr />
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Business"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Shereen Mandani
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    "Profitni Life has been a game-changer for me. Its holistic approach to financial empowerment and personal fulfillment has transformed how I approach both my business and personal life."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/10644084/pexels-photo-10644084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Business"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rithik Roshan
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    "The privacy and control features on Environment are top-notch. As an IT professional, I value platforms that prioritize user privacy and offer robust moderation tools to ensure a safe and inclusive environment."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/3642047/pexels-photo-3642047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="IT"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Priya Prakash
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    "The user experience on Profitni Life is seamless and intuitive. As someone in the IT field, I appreciate the attention to detail and the smooth navigation, making it easy to access valuable resources and insights."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
