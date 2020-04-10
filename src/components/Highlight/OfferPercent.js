import React, { useState, useEffect, Fragment } from 'react';
import { Typography } from '@material-ui/core';


const OfferPercent = () => {
    const offerPercent = 60
    const [percent, setPercent] = useState(0)
    useEffect(() => {
        setTimeout(() => percent < offerPercent && setPercent(percent + 1), 30)
    }, [percent])
    return (
        <Fragment>
            <Typography variant="h2" align="center"
                style={{ color: "#24292e", fontWeight: "bold" }}
            >
                {percent}%
                </Typography>
            <p style={{ textAlign: 'center', fontSize: "1.2rem", fontWeight: 'bold' }}>Off</p>
        </Fragment>
    );
}

export default OfferPercent;
