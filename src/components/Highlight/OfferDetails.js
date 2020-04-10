import React, { Fragment } from 'react';
import { Typography, Button } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const OfferDetails = () => {
    return (
        <Fragment>
            <Typography variant="subtitle1" gutterBottom>
                Subscribe Now For Premium Before Jun 3rd.
            </Typography>
            <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Button variant="contained" size="large" style={{ color: "#fff", backgroundColor: "#24292e", marginTop: "10px" }}>
                <AccountCircleRoundedIcon style={{ marginRight: "10px" }} /> Subscribe
            </Button>
        </Fragment>
    );
}

export default OfferDetails;
