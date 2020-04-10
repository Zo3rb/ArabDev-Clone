import React from 'react';
import { Card, Paper, CardContent, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Typography } from '@material-ui/core';

const Free = () => {
    return (
        <Card>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: "#24292e", color: "#fff", textAlign: "center" }}>
                                    <Typography variant="h6">
                                        Free
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
        </Card>
    );
}

export default Free;
