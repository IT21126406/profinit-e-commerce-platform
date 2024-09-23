import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, Typography, AppBar, Toolbar, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

const BusinessForm = () => {

    const [newPost, setNewPost] = useState({
        pid: generateId(),
        name: '',
        description: '',
        phone:'',
        email:'',
        picture:''       
    });

    function generateId() {
        let id = '';
        for (let i = 0; i < 9; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }

    const [errors, setErrors] = useState({});
    const [imageSelected, setImageSelected] = useState(null);


    const handleImageChange = (event) => {
        setImageSelected(event.target.files[0]);
        setNewPost({ ...newPost, picture: "https://res.cloudinary.com/dnomnqmne/image/upload/v1630743483/" + event.target.files[0].name });
    };

    const handleAddItem = async () => {
        if (validateForm()) {
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "ml_default");
            try {

                await axios.post(
                    "https://api.cloudinary.com/v1_1/dnomnqmne/image/upload",
                    formData
                ).then(await axios.post(global.APIUrl + "/menuItem/addMenuItem", newPost))
                Swal.fire({
                    title: "Success!",
                    text: "Menu item added successfully.",
                    icon: 'success',
                    confirmButtonText: "OK"
                });
                setTimeout(() => {
                    window.location.href = "/MenuManage";
                }, 3000);
            } catch (error) {
                console.log(error.message);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to add menu item.",
                    icon: 'error',
                    confirmButtonText: "OK"
                });
                setTimeout(() => {
                    window.location.href = "/MenuForm";
                }, 3000);
            }
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!newPost.name.trim()) {
            errors.name = 'Company Name is required';
            isValid = false;
        }

        if (!newPost.description.trim()) {
            errors.description = 'Description is required';
            isValid = false;
        }

        if (!newPost.phone.trim()) {
            errors.phone = 'Phone Number is required';
            isValid = false;
        }

        if (!newPost.email.trim()) {
            errors.email = 'Contact Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(newPost.email)) {
            errors.email = 'Email address is invalid';
            isValid = false;
        }

        if (!imageSelected) {
            errors.picture = 'Image is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleCancel = () => {
        window.location.href = "/BusinessManage";
    };

    return (
        <div style={{ paddingTop: '64px', backgroundColor: '#f4f4f4' }}>
            <AppBar position="fixed" style={{ backgroundColor: '#1c2331', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Add Post
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <Button variant="contained" color="primary" onClick={handleAddItem}>
                        Add Post
                    </Button>
                    <Button variant="contained" color="error" onClick={handleCancel} style={{ marginLeft: '8px' }}>
                        Cancel
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: '20px',paddingBottom:'500px'}}>
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h6" style={{ marginBottom: '10px' }}>
                                Add Post Form
                            </Typography>
                            <hr />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Company Name"
                                fullWidth
                                placeholder='Company Name'
                                value={newPost.name}
                                onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>                       

                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                fullWidth
                                value={newPost.description}
                                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                                error={!!errors.description}
                                helperText={errors.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone Number"
                                fullWidth
                                value={newPost.phone}
                                onChange={(e) => setNewPost({ ...newPost, phone: e.target.value })}
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contact Email"
                                fullWidth
                                value={newPost.email}
                                onChange={(e) => setNewPost({ ...newPost, email: e.target.value })}
                                error={!!errors.email}
                                helperText={errors.email}
                                type='mail'
                                inputProps={{ min: 0 }}
                            />
                        </Grid>                        
                        <Grid item xs={12}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {errors.picture && <Typography variant="caption" color="error">{errors.picture}</Typography>}
                        </Grid>                      
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default BusinessForm;
