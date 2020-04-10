import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Location = () => {
    return (
        <Grid container style={{ padding: "30px 0", backgroundColor: "#fff", color: "#24292e" }}>
            <Grid item xs>
                <Typography variant="h4" style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>
                    Find Us Here
                </Typography>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7320593425843!2d31.237454485406467!3d30.044543925523964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c640406f07%3A0xbec96781af26951c!2z2YXZitiv2KfZhiDYp9mE2KrYrdix2YrYsdiMINio2KfYqCDYp9mE2YTZiNmC2Iwg2LnYp9io2K_ZitmG2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1586542526193!5m2!1sar!2seg" width="100%" height="500" frameBorder="0" allowFullScreen title="location" aria-hidden="false" tabIndex="0">
                </iframe>
            </Grid>
        </Grid>
    );
}

export default Location;
