import React, { Fragment } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import LightSpeed from 'react-reveal/LightSpeed';
import Premium from './Premium';
import Free from './Free';

const Features = () => {
    return (
        <Fragment>
            <Grid container style={{ padding: "30px 0" }}>
                <Grid item xs>
                    <Typography variant="h4"
                        align="center"
                        style={{ fontWeight: "bold", textTransform: "uppercase", marginBottom: "20px" }}
                    >
                        Why Premium ?
                </Typography>
                    <Divider variant="middle" style={{ color: "#fff", backgroundColor: "#fff" }} />
                </Grid>
            </Grid>
            <Grid container style={{ padding: "30px 0" }} justify="space-around">
                <Grid item xs={10} sm={5} style={{ marginBottom: "10px" }}>
                    <LightSpeed left>
                        <Premium />
                    </LightSpeed>
                </Grid>
                <Grid item xs={10} sm={5}>
                    <LightSpeed right delay={500}>
                        <Free />
                    </LightSpeed>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Features;
