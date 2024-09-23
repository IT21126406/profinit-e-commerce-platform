import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../Main/SideBar';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import Swal from 'sweetalert2';


const EmployeeManage = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetchEmployeeDetails();
    }, []);

    const fetchEmployeeDetails = async () => {
        try {
            const response = await axios.get(global.APIUrl + '/admin/getAll');
            const employeesWithId = response.data.map((employee, index) => ({
                id: index + 1,
                ...employee
            }));
            setEmployee(employeesWithId);
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };

    const handleAddEmployee = () => {
        window.location.href = "/EmployeeForm";
    };

    // const handleEditEmployee = (selectedEmployee) => {
    //     localStorage.setItem('selectedEmployee', JSON.stringify(selectedEmployee));
    //     window.location.href = "/EditEmployeeForm";
    // };

    const handleUpdateEmployee = async (selectedEmployee) => {
        try {
            let updatedStatus;
            if (selectedEmployee.status === 'Activate') {
                updatedStatus = 'Deactivate';
            } else {
                updatedStatus = 'Activate';
            }

            const updatedEmployee = { ...selectedEmployee, status: updatedStatus };
            await axios.put(`${global.APIUrl}/admin/update`, updatedEmployee);

            setEmployee(prevEmployees =>
                prevEmployees.map(employee =>
                    employee.id === selectedEmployee.id ? updatedEmployee : employee
                )
            );
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };



    const handleDeleteEmployee = (employeeId) => {
        axios.delete(global.APIUrl + "/admin/delete/" + employeeId).then(() => {
            window.location.href = "/Employee";

        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Employee Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })

    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Deactivate':
                return 'red';
            case 'Activate':
                return 'green';
            default:
                return 'black';
        }
    };

    const columns = [
        { field: 'pid', headerName: 'ID', width: 150 },
        { field: 'company', headerName: 'Company', width: 150 },
        { field: 'position', headerName: 'Position', width: 150 },
        { field: 'requirements', headerName: 'Requirements', width: 350 },
        { field: 'responsibilities', headerName: 'Responsibilities', width: 350 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'location', headerName: 'Location', width: 150 },
        { field: 'availability', headerName: 'Availability', width: 150 },       
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <div>
                    {params.row.status === 'Activate' ? (
                        <IconButton color="error" onClick={() => handleUpdateEmployee(params.row)}>
                            <CloseIcon />
                        </IconButton>
                    ) : (
                        <IconButton color="success" onClick={() => handleUpdateEmployee(params.row)}>
                            <CheckIcon />
                        </IconButton>
                    )}
                    <IconButton color="error" onClick={() => handleDeleteEmployee(params.row.uid)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', maxWidth: '161vh' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: 20, backgroundColor: '#ecf0f1', display: 'flex', flexDirection: 'column' }}>
                <AppBar position="static" sx={{ backgroundColor: '#1c2331', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Employee Management
                        </Typography>
                        <div style={{ flexGrow: 1 }}></div>
                        <Button variant="contained" color="primary" onClick={handleAddEmployee}>
                            Add Post
                        </Button>
                    </Toolbar>
                </AppBar>

                <div style={{ padding: 20, backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '161vh' }}>
                    <Typography variant="h5" gutterBottom>
                        Post Details
                    </Typography>
                    <div style={{ width: '100%' }}>
                        <DataGrid rows={employee} columns={columns} pageSize={5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeManage;
