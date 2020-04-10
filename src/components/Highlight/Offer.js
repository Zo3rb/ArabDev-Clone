import React from 'react';
import { Grid } from '@material-ui/core';
import OfferPercent from './OfferPercent';
import OfferDetails from './OfferDetails';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const Offer = () => {
    return (
        <Grid container style={{ padding: "30px 5px", backgroundColor: "white", color: "#24292e" }}>
            <Grid item xs={12} sm={3} style={{ margin: "10px 0 0" }}>
                <Slide left>
                    <OfferPercent />
                </Slide>
            </Grid>
            <Grid item xs={12} sm={9} style={{ margin: "10px 0" }}>
                <Fade bottom>
                    <OfferDetails />
                </Fade>
            </Grid>
        </Grid>
    );
}

export default Offer;
