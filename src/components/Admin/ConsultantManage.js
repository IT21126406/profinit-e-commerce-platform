import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../Main/SideBar';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const ConsultantManage = () => {
    // Sample chat array with user objects
    const chatArray = [
        { name: "John Doe", mail: "john@example.com" },
        { name: "Jane Smith", mail: "jane@example.com" },
        { name: "Michael Johnson", mail: "michael@example.com" },
        { name: "Emily Brown", mail: "emily@example.com" },
        { name: "David Wilson", mail: "david@example.com" }
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', maxWidth: '300vh' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: 20, backgroundColor: '#ecf0f1', display: 'flex', flexDirection: 'column' }}>
                <AppBar position="static" sx={{ backgroundColor: '#1c2331', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                        Consultant Management
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div style={{ padding: 20, backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '300vh' }}>
                    <Typography variant="h5" gutterBottom>
                        Chat With Users
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        {chatArray.map((user, index) => (
                            <SquareCard key={index} name={user.name} mail={user.mail} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SquareCard = ({ name, mail }) => {
    const handleClick = () => {
        window.location.href = `/ConsultantChat`;
    };

    return (
        <div onClick={handleClick} style={{ width: 'calc(20% - 20px)', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', margin: '10px', cursor: 'pointer' }}>
            {/* Displaying name as title and mail as description */}
            <Typography variant="h6" style={{ marginBottom: '10px' }}>{name}</Typography>
            <Typography variant="body1">{mail}</Typography>
        </div>
    );
};

export default ConsultantManage;
