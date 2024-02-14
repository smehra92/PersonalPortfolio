import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Contact from './Contact';

function Home() {

    return (
        <Box>
            
            <Box sx={{ margin: "80px" }}>
                <Typography  variant='h1' style={{ color: '#2E3B55' }}>Hi, I am Siddharth Mehra
                    <br />
                    I Write Code
                </Typography>
            </Box>
            <Box style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px',
                padding: '10px'
            }}>
                <Box sx={{ padding: "30px" }}>
                    <Typography variant='h5' style={{ color: '#2E3B55' }}> I am a full-stack developer.
                        <br />
                        I have been doing web development for six years now.
                        <br />
                        I have a great passion for coding in general.
                        <br />
                        I have good hands-on experience with both software and hardware ranging
                        <br />
                        from web apps to IoT applications.</Typography>
                </Box>
                <Box sx={{ padding: "30px" }}>
                    <Typography variant='h5' style={{ color: '#2E3B55' }}> I am a full-stack developer.
                        <br />
                        I have been doing web development for six years now.
                        <br />
                        I have a great passion for coding in general.
                        <br />
                        I have good hands-on experience with both software and hardware ranging
                        <br />
                        from web apps to IoT applications.</Typography>
                </Box>
            </Box>
            <Box>
                <Contact />
            </Box>
        </Box >
    )
}

export default Home