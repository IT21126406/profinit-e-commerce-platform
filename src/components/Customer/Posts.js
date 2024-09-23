import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Button,
    Avatar
} from '@material-ui/core';
import Navbar from '../Main/NavBar.js';
import Footer from '../Main/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    section: {
        marginTop: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        marginBottom: theme.spacing(10),
    },
    card: {
        maxWidth: '100%',
        paddingTop: theme.spacing(5),
    },
    cardContent: {
        flexGrow: 1,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

function Posts() {
    const classes = useStyles();

    // Dummy data for 6 posts
    const dummyData = [
        {
            pid: '123',
            name: 'Post 1',
            description: 'Description of post 1',
            phone: '123-456-7890',
            email: 'post1@example.com',
            picture: 'https://via.placeholder.com/150',
        },
        {
            pid: '123',
            name: 'Post 2',
            description: 'Description of post 2',
            phone: '123-456-7890',
            email: 'post2@example.com',
            picture: 'https://via.placeholder.com/150',
        },
        {
            pid: '123',
            name: 'Post 3',
            description: 'Description of post 3',
            phone: '123-456-7890',
            email: 'post3@example.com',
            picture: 'https://via.placeholder.com/150',
        },
        {
            pid: '123',
            name: 'Post 4',
            description: 'Description of post 4',
            phone: '123-456-7890',
            email: 'post4@example.com',
            picture: 'https://via.placeholder.com/150',
        },
        {
            pid: '123',
            name: 'Post 5',
            description: 'Description of post 5',
            phone: '123-456-7890',
            email: 'post5@example.com',
            picture: 'https://via.placeholder.com/150',
        },
        {
            pid: '123',
            name: 'Post 6',
            description: 'Description of post 6',
            phone: '123-456-7890',
            email: 'post6@example.com',
            picture: 'https://via.placeholder.com/150',
        },
    ];

    const handleViewDetails = (post) => {
        // Add your logic here to view post details
        Swal.fire({
            title: post.name,
            text: post.description,
            imageUrl: post.picture,
            imageAlt: post.name,
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className={classes.root}>
            <Navbar />
            <Grid container spacing={3} className={classes.section}>
                {dummyData.map(post => (
                    <Grid item xs={12} sm={6} md={4} key={post.pid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Avatar alt={post.name} src={post.picture} />
                                <Typography variant="h5" gutterBottom>{post.name}</Typography>
                                <Typography variant="body2" paragraph>{post.description}</Typography>
                                <Typography variant="body2" paragraph>{post.phone}</Typography>
                                <Typography variant="body2" paragraph>{post.email}</Typography>
                                <Button variant="contained" color="primary" className={classes.button} onClick={() => handleViewDetails(post)}>View Details</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
    );
}

export default Posts;
