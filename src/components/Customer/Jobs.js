import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    Avatar
} from '@material-ui/core';
import Navbar from '../Main/NavBar.js';
import Footer from '../Main/Footer';
import Rating from '@material-ui/lab/Rating';
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

function Jobs() {
    const classes = useStyles();

    // Dummy data for 6 cards
    const dummyData = [
        {
            pid: '12356',
            company: 'Company A',
            position: 'Software Engineer',
            requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in JavaScript, React, Node.js',
            responsibilities: 'Developing high-quality software solutions, collaborating with team members, conducting code reviews',
            email: 'companya@example.com',
            phone: '123-456-7890',
            location: 'New York, NY',
            availability: 'Full-time',
        },  {
            pid: '12356',
            company: 'Company A',
            position: 'Software Engineer',
            requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in JavaScript, React, Node.js',
            responsibilities: 'Developing high-quality software solutions, collaborating with team members, conducting code reviews',
            email: 'companya@example.com',
            phone: '123-456-7890',
            location: 'New York, NY',
            availability: 'Full-time',
        },  {
            pid: '12356',
            company: 'Company A',
            position: 'Software Engineer',
            requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in JavaScript, React, Node.js',
            responsibilities: 'Developing high-quality software solutions, collaborating with team members, conducting code reviews',
            email: 'companya@example.com',
            phone: '123-456-7890',
            location: 'New York, NY',
            availability: 'Full-time',
        },  {
            pid: '12356',
            company: 'Company A',
            position: 'Software Engineer',
            requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in JavaScript, React, Node.js',
            responsibilities: 'Developing high-quality software solutions, collaborating with team members, conducting code reviews',
            email: 'companya@example.com',
            phone: '123-456-7890',
            location: 'New York, NY',
            availability: 'Full-time',
        },  {
            pid: '12356',
            company: 'Company A',
            position: 'Software Engineer',
            requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in JavaScript, React, Node.js',
            responsibilities: 'Developing high-quality software solutions, collaborating with team members, conducting code reviews',
            email: 'companya@example.com',
            phone: '123-456-7890',
            location: 'New York, NY',
            availability: 'Full-time',
        },  {
            pid: '12356',
            company: 'Company A',
            position: 'Software Engineer',
            requirements: 'Bachelor\'s degree in Computer Science, 3+ years of experience in web development, proficiency in JavaScript, React, Node.js',
            responsibilities: 'Developing high-quality software solutions, collaborating with team members, conducting code reviews',
            email: 'companya@example.com',
            phone: '123-456-7890',
            location: 'New York, NY',
            availability: 'Full-time',
        },
        // Add more dummy data for other cards...
    ];

    const handleApply = (job) => {
        // Add your apply logic here
        Swal.fire({
            title: 'Application Submitted',
            text: 'Your application for ' + job.position + ' at ' + job.company + ' has been submitted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className={classes.root}>
            <Navbar />
            <Grid container spacing={3} className={classes.section}>
                {dummyData.map(job => (
                    <Grid item xs={12} sm={6} md={4} key={job.pid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" gutterBottom>{job.company}</Typography>
                                <Typography variant="subtitle1" gutterBottom>{job.position}</Typography>
                                <Divider style={{ marginBottom: '10px' }} />
                                <Typography variant="body2" gutterBottom><strong>Requirements:</strong></Typography>
                                <Typography variant="body2" paragraph>{job.requirements}</Typography>
                                <Typography variant="body2" gutterBottom><strong>Responsibilities:</strong></Typography>
                                <Typography variant="body2" paragraph>{job.responsibilities}</Typography>
                                <Divider style={{ marginBottom: '10px' }} />
                                <Typography variant="body2" gutterBottom><strong>Email:</strong> {job.email}</Typography>
                                <Typography variant="body2" gutterBottom><strong>Phone:</strong> {job.phone}</Typography>
                                <Typography variant="body2" gutterBottom><strong>Location:</strong> {job.location}</Typography>
                                <Typography variant="body2" gutterBottom><strong>Availability:</strong> {job.availability}</Typography>
                                <Button variant="contained" color="primary" className={classes.button} onClick={() => handleApply(job)}>Apply</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
    );
}

export default Jobs;
