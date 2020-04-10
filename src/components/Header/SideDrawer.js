import React from 'react';
import { Drawer, List, Divider, ListItem, Paper } from '@material-ui/core';
import { scroller } from 'react-scroll';

const SideDrawer = props => {

    const scrollToElement = element => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -65
        })
        props.onClose(false)
    }

    return (
        <Drawer anchor="right"
            open={props.open}
            onClose={props.onClose}
        >
            <Paper style={{ backgroundColor: '#515151', color: 'white', height: '100%', width: '30vw' }}>
                <List component="nav">
                    <ListItem button onClick={() => scrollToElement("home")}>
                        Home - Page Top
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={() => scrollToElement("forms")}>
                        Sign Up - Login
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={() => scrollToElement("premium")}>
                        Premium
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={() => scrollToElement("features")}>
                        Features
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={() => scrollToElement("location")}>
                        Find Us & Contact
                    </ListItem>
                    <Divider light />
                </List>
            </Paper>
        </Drawer>
    );
}

export default SideDrawer;
