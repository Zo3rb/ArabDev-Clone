import React, { useState, Fragment, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import SideDrawer from './SideDrawer';
import SlideSection from './SlideSection';

const Header = () => {
    // Header States
    const [open, setOpen] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    // Component Did Mount Life Cycle with Hooks
    useEffect(() => {
        window.onscroll = () => {
            window.scrollY === 0 ? setIsScrolling(false) : setIsScrolling(true)
        }
    }, [])
    // To Open The Drawer
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    // To Close The Drawer
    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <Fragment>
            <AppBar position="fixed" style={isScrolling
                ? { backgroundColor: '#24292E' }
                : { backgroundColor: 'transparent', boxShadow: "none", color: "#24292E" }}
            >
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <Typography variant="h6">
                        <GavelRoundedIcon style={{ margin: "0 20px", lineHeight: '100%' }} />
                    Arab Dev
                    </Typography>
                    <IconButton onClick={handleDrawerOpen} color="inherit" aria-label="open drawer" align="end">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideDrawer open={open} onClose={handleDrawerClose} />
            <SlideSection />
        </Fragment>
    );
}

export default Header;
