import React from 'react';
import { Card, Paper, CardContent, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Typography, CardActions, Button } from '@material-ui/core';

const Premium = () => {
    return (
        <Card>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: "#24292e", color: "#fff", textAlign: "center" }}>
                                    <Typography variant="h6">
                                        Premium
                                            </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                    Feature One
                                        </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                    Feature Two
                                        </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                    Feature Three
                                        </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                    Feature Four
                                        </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                    Feature Five
                                        </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
            <CardActions>
                <Button style={{ backgroundColor: "#24292e", color: "#fff" }} fullWidth>Subscribe Now</Button>
            </CardActions>
        </Card>
    );
}

export default Premium;
