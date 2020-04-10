import React from 'react';
import { Grid, Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <Grid container style={{ padding: "30px 0" }}>
            <Grid item xs>
                <Typography variant="h4" style={{ textAlign: "center", marginBottom: "10px" }}>
                    All Rights Goes For Course Instructor
                </Typography>
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    React / Material UI & Icons / React Reveal / React Scroll / Inline JSS
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;
