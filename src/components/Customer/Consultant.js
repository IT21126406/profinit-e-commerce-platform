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

function Consultant() {
    const classes = useStyles();
    const chatArray = [
        { name: "John Doe", mail: "john@example.com" },
        { name: "Jane Smith", mail: "jane@example.com" },
        { name: "Michael Johnson", mail: "michael@example.com" },
        { name: "Emily Brown", mail: "emily@example.com" },
        { name: "David Wilson", mail: "david@example.com" }
    ];

    return (
        <div className={classes.root}>
            <Navbar />
            <div style={{ padding: 20, backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '300vh' }}>
                    <Typography variant="h5" gutterBottom>
                        Chat With Consultants
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        {chatArray.map((user, index) => (
                            <SquareCard key={index} name={user.name} mail={user.mail} />
                        ))}
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <Footer />
        </div>
    );
}

const SquareCard = ({ name, mail }) => {
    const handleClick = () => {
        window.location.href = `/Chat`;
    };

    return (
        <div onClick={handleClick} style={{ width: 'calc(20% - 20px)', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', margin: '10px', cursor: 'pointer' }}>
            {/* Displaying name as title and mail as description */}
            <Typography variant="h6" style={{ marginBottom: '10px' }}>{name}</Typography>
            <Typography variant="body1">{mail}</Typography>
        </div>
    );
};

export default Consultant;
