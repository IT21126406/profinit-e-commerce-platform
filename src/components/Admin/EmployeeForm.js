import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, AppBar, Toolbar } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddNewPostForm = () => {
    const [newPost, setNewPost] = useState({
        pid: generateId(),
        company: '',
        position: '',
        requirements: '',
        responsibilities: '',
        email: '',
        phone: '',
        location: '',
        availability: '',
    });

    const [errors, setErrors] = useState({});

    function generateId() {
        let id = '';
        for (let i = 0; i < 9; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }

    const handleAddPost = async () => {
        if (validateForm()) {
            try {
                await axios.post(global.APIUrl + "/admin/addPost", newPost);
                await Swal.fire({
                    title: "Success!",
                    text: "Post Added Successfully",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                });
                window.location.href = "/Employee";
            } catch (error) {
                console.error('Error adding post:', error);
            }   window.location.href = "/EmployeeForm";     
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!newPost.company.trim()) {
            errors.company = 'Company is required';
            isValid = false;
        }

        if (!newPost.position.trim()) {
            errors.position = 'Position is required';
            isValid = false;
        }

        if (!newPost.requirements.trim()) {
            errors.requirements = 'Requirements is required';
            isValid = false;
        }

        if (!newPost.responsibilities.trim()) {
            errors.responsibilities = 'Responsibilities is required';
            isValid = false;
        }

        if (!newPost.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(newPost.email)) {
            errors.email = 'Email address is invalid';
            isValid = false;
        }

        if (!newPost.phone.trim()) {
            errors.phone = 'Phone is required';
            isValid = false;
        }

        if (!newPost.location.trim()) {
            errors.location = 'Location is required';
            isValid = false;
        }

        if (!newPost.availability.trim()) {
            errors.availability = 'Availability is required';
            isValid = false;
        }


        setErrors(errors);
        return isValid;
    };

    const handleCancel = () => {
        window.location.href = "/Employee";
    };

    return (
        <div style={{ height: '100vh', paddingTop: '64px', backgroundColor: '#f4f4f4' }}>
            <AppBar position="fixed" style={{ backgroundColor: '#1c2331', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Add New Post
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <Button variant="contained" color="primary" onClick={handleAddPost}>
                        Add Post
                    </Button>
                    <Button variant="contained" color="error" onClick={handleCancel} style={{ marginLeft: '8px' }}>
                        Cancel
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: '20px' }}>
                <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h6" style={{ marginBottom: '10px' }}>
                                Add New Post Form
                            </Typography>
                            <hr />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Company"
                                fullWidth
                                placeholder='A4562'
                                value={newPost.company}
                                onChange={(e) => setNewPost({ ...newPost, company: e.target.value })}
                                error={!!errors.company}
                                helperText={errors.company}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Position"
                                fullWidth
                                value={newPost.position}
                                onChange={(e) => setNewPost({ ...newPost, position: e.target.value })}
                                error={!!errors.position}
                                helperText={errors.position}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Requirements"
                                fullWidth
                                value={newPost.requirements}
                                onChange={(e) => setNewPost({ ...newPost, requirements: e.target.value })}
                                error={!!errors.requirements}
                                helperText={errors.requirements}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Responsibilities"
                                fullWidth
                                value={newPost.responsibilities}
                                onChange={(e) => setNewPost({ ...newPost, responsibilities: e.target.value })}
                                error={!!errors.responsibilities}
                                helperText={errors.responsibilities}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                fullWidth
                                value={newPost.email}
                                onChange={(e) => setNewPost({ ...newPost, email: e.target.value })}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone"
                                fullWidth
                                value={newPost.phone}
                                onChange={(e) => setNewPost({ ...newPost, phone: e.target.value })}
                                error={!!errors.phone}
                                helperText={errors.phone}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Location"
                                fullWidth
                                value={newPost.location}
                                onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
                                error={!!errors.location}
                                helperText={errors.location}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Availability"
                                fullWidth
                                value={newPost.availability}
                                onChange={(e) => setNewPost({ ...newPost, availability: e.target.value })}
                                error={!!errors.availability}
                                helperText={errors.availability}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default AddNewPostForm;
