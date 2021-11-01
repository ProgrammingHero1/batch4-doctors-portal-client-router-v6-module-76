import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Appointment
                    </Typography>
                    <Typography variant="h4">
                        Make an Appointment Today
                    </Typography>
                    <Typography style={{ color: 'white' }} variant="h6" sx={{ fontSize: 16, mt: 5 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab aperiam et!
                    </Typography>
                    <Button variant="contained" color="success">Learn More</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;