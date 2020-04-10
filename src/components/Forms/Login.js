import React from 'react';
import { Grid, Paper, Hidden, TextField, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Login = props => {

    const { children, value, index, ...other } = props;

    return (
        <div
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Grid container style={{ padding: "10px 0 20px", height: "400px" }}>
                <Grid item md={6}>
                    <Hidden only={['sm', 'xs']}>
                        <Paper elevation={0} square style={{ padding: "20px", backgroundColor: "inherit", color: "white", textAlign: "center" }}>
                            <h1 style={{ marginTop: "30%" }}>Welcome Back Brother</h1>
                        </Paper>
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={12} md={6} style={{ marginTop: "10px" }}>
                    <Paper elevation={3} square style={{ padding: "20px", color: "inherit", backgroundColor: '#fff', marginTop: "70px" }}>
                        <form noValidate autoComplete="off">
                            <TextField name="email" type="email" fullWidth label="Email" variant="outlined"
                                style={{ margin: "10px 0" }} />
                            <TextField name="password" type="password" fullWidth label="Password" variant="outlined" style={{ margin: "10px 0" }} />
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<ExitToAppIcon>send</ExitToAppIcon>}
                            >
                                Sign In
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
