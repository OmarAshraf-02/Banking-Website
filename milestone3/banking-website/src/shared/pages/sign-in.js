import React from 'react';
import logo from '../../assets/logo.png';
import { useState } from "react";
import { Button, TextField, Typography } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const FormWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    padding: '2rem',
    backgroundColor: '#333',
    borderRadius: '8px',
});
const Logo = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const LogoImage = styled('img')(({ theme }) => ({
    width: '200px',
    height: 'auto',
}));

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#22c55e',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#999999', // Customize the outline color here
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Customize the hover outline color here
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#22c55e', // Customize the focused outline color here
                        },
                    },
                },
            },
        },
    },
});



const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <ThemeProvider theme={theme}>
            <div style={{ background: '#121212', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormWrapper>
                    <Logo>
                        <LogoImage src={logo} alt="Logo" />
                    </Logo>
                    <Typography variant="h5" gutterBottom>

                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <TextField
                            label="Bank ID"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            multiline
                            InputProps={{
                                style: { backgroundColor: '#333', color: 'white' },
                            }}
                            InputLabelProps={{
                                style: { color: '#999999' },
                            }}
                            onChange={(event)=>setEmail(event.target.value)}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            multiline
                            required
                            InputProps={{
                                style: { backgroundColor: '#333', color: 'white' },
                            }}
                            InputLabelProps={{
                                style: { color: '#999999' },
                            }}
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                        {
                            email==='admin' && password ==='admin'? 
                                <Link to='/admin'>
                                    <Button variant="contained" color="primary" type="submit" fullWidth style={{ color: 'white' }}>Login</Button>
                                </Link>
                                :
                                (
                                    email==='banker' && password ==='banker'?
                                        <Link to='/banker'>
                                            <Button variant="contained" color="primary" type="submit" fullWidth style={{ color: 'white' }}>Login</Button>
                                        </Link>
                                        :
                                        (
                                            email==='client' && password ==='client'?
                                                <Link to='/client'>
                                                    <Button variant="contained" color="primary" type="submit" fullWidth style={{ color: 'white' }}>Login</Button>
                                                </Link>
                                                :
                                                <Button variant="contained" color="primary" type="submit" fullWidth style={{ color: 'white' }}>Login</Button>
                                        )
                                )
                                
                        }
                        {/* <Button variant="contained" color="primary" type="submit" fullWidth style={{ color: 'white' }}>
                            Login
                        </Button> */}
                    </form>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Button color="primary">Forgot Password?</Button>
                        <Link to='/signUp'>
                            <Button color="primary">Don't have an account?</Button>
                        </Link>
                    </div>
                </FormWrapper>
            </div>
        </ThemeProvider>
    );
};


export default SignIn;
