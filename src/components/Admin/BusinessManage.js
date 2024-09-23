import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../Main/SideBar';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Avatar } from '@mui/material';

const BusinessManage = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchMenuDetails();
    }, []);

    const fetchMenuDetails = async () => {
        try {
            const response = await axios.get(global.APIUrl + '/menuItem/allMenuItem');
            const menusWithId = response.data.map((menu, index) => ({
                id: index + 1,
                ...menu
            }));
            setMenu(menusWithId);
        } catch (error) {
            console.error('Error fetching menu details:', error);
        }
    };

    const handleAddMenu = () => {
        window.location.href = "/BusinessForm";
    };

    const handleEditMenu = (selectedMenu) => {
        // Handle edit logic here
    };


    const handleDeleteMenu = (itemId) => {
        axios.delete(global.APIUrl + "/menuItem/delete/" + itemId).then(() => {
            window.location.href = "/MenuManage";

        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Menu Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })

    };

    const columns = [
        { field: 'pid', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Company Name', width: 150 },        
        { field: 'description', headerName: 'Description', width: 550 },
        { field: 'phone', headerName: 'Contact', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'picture', headerName: 'Picture', width: 150, renderCell: renderPicture },        
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    <IconButton color="primary" onClick={() => handleEditMenu(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteMenu(params.row.itemId)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    function renderPicture(params) {
        return <Avatar alt="Item Picture" src={params.value} sx={{ width: 50, height: 50 }} variant="square" />;
    }


    return (
        <div style={{ display: 'flex', height: '100vh', maxWidth: '161vh' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: 20, backgroundColor: '#ecf0f1', display: 'flex', flexDirection: 'column' }}>
                <AppBar position="static" sx={{ backgroundColor: '#1c2331', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Business Management
                        </Typography>
                        <div style={{ flexGrow: 1 }}></div>
                        <Button variant="contained" color="primary" onClick={handleAddMenu}>
                            Add New Post
                        </Button>
                    </Toolbar>
                </AppBar>

                <div style={{ padding: 20, backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '161vh' }}>
                    <Typography variant="h5" gutterBottom>
                        Post Details
                    </Typography>
                    <div style={{ width: '100%' }}>
                        <DataGrid rows={menu} columns={columns} pageSize={5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessManage;
