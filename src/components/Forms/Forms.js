import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Register from './Register';
import Login from './Login';
import Zoom from 'react-reveal/Zoom';

const Forms = () => {

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered indicatorColor="primary" variant="fullWidth">
                <Tab label="Sign Up" {...a11yProps(0)} />
                <Tab label="Sign In" {...a11yProps(1)} />
            </Tabs>
            <Zoom left duration={500}>
                <Register value={value} index={0} />
            </Zoom>
            <Login value={value} index={1} />
        </div>
    );
}

export default Forms;
