import React from 'react';
import { Grid, Paper, Hidden, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Register = props => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Grid container justify="center" alignContent="center" style={{ padding: "10px 0 20px", height: "400px" }}>
                <Grid item xs={12} sm={12} md={6} style={{ marginTop: "10px" }}>
                    <Paper elevation={3} square style={{ padding: "20px", color: "inherit", backgroundColor: '#fff' }}>
                        <form noValidate autoComplete="off">
                            <TextField name="email" type="email" fullWidth label="Email" variant="outlined"
                                style={{ margin: "10px 0" }} />
                            <TextField name="username" type="text" fullWidth label="Username" variant="outlined"
                                style={{ margin: "10px 0" }} />
                            <TextField name="password" type="password" fullWidth label="Password" variant="outlined" style={{ margin: "10px 0" }} />
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon>send</SendIcon>}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Hidden only={['sm', 'xs']}>
                        <Paper elevation={0} square style={{ padding: "20px", backgroundColor: "inherit", color: "white", textAlign: "center" }}>
                            <h1 style={{ marginTop: "25%" }}>From Arabian to Arabian</h1>
                            <p>Join Us Now</p>
                        </Paper>
                    </Hidden>
                </Grid>
            </Grid>
        </div>
    );
}

export default Register;
