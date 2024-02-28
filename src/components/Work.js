import * as React from 'react'
import PropTypes from 'prop-types'
import {
    Tabs, Tab,
    Typography, Box, Paper
} from '@mui/material'

function CustomTabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Work() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                // border: 1,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: 700,
                    // height: 350,
                    mx: { xs: 1, },
                    height: {
                        xs: 500,
                        sm: 350,
                        md: 350,
                    },
                    borderRadius: 5,
                    // my: 8,
                    my:{
                        xs: 4,
                        sm: 8,
                        md: 8,
                    }
                }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="2023 - Present" {...a11yProps(0)} />
                        <Tab label="2022" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Typography variant='h5'>Assistant System Engineer</Typography>
                    <Typography variant='h6'>Tata Consultancy Services</Typography>
                    <Typography variant='h6'>Project</Typography>
                    <Typography variant='h7'>CelcomDigi (Automation/Manual Testing)</Typography>
                    <Typography variant='body1'>
                        <li>
                            Executed manual tests, meticulously documenting test results, and promptly identifying and
                            reporting defects for resolution
                        </li>
                        <li>
                            Executed script to evaluate the performance and functionality of the systems.
                        </li>
                        <li>
                            Collaborated with cross-functional teams, including other vendors.
                        </li>
                        <li>
                            Tools: Java, Selenium, Postman, Jira
                        </li>
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography variant='h6'>IT Assistance (Internship)</Typography>
                    <Typography variant='h6'>Else Hotel</Typography>
                    <Typography variant='body1'>
                        <li>
                            Understand and manage software and system used by the hotel.
                        </li>
                        <li>
                            Communicate and provide problem-solving solutions with contractors.
                        </li>
                        <li>
                            Maintain the hotel server and data.
                        </li>
                    </Typography>
                </CustomTabPanel>
            </Paper>
        </Box>
    );
}