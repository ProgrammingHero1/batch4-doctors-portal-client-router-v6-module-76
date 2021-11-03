import { Container } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import login from '../../../images/login.png'

const Login = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;