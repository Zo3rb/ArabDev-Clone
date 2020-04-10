import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';

const Description = () => {
    return (
        <Paper elevation={0}
            style={{ padding: "30px 50px", backgroundColor: "white", color: "black" }}
        >
            <Typography variant="h3"
                align="center"
                style={{ fontWeight: "bold", textTransform: "uppercase", marginBottom: "20px" }}
            >
                Premium
            </Typography>
            <Divider variant="middle" />
            <Typography variant="body1" align="center" style={{ margin: "20px 0" }}>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Divider variant="middle" />
        </Paper>
    );
}

export default Description;
