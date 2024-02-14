import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import pdf from './SiddharthResume.pdf'

//Link tag is used for eliminating the page refresh while going from one page to another i.e. making single page application.

function App() {
  const imageURL = "https://images.pexels.com/photos/4862892/pexels-photo-4862892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const handleLinkedin = () => { window.open('https://www.linkedin.com/in/siddharth-mehra-41a323129/', '_blank', 'noreferrer') }

  const handleResume = () => { window.open(pdf, '_blank', 'noreferrer') }

  return (
    <Box sx={{
      position: 'absolute',
      width: '100%',
      height: '150%',
      backgroundImage: `url(${imageURL})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat'
    }}>
      <Router>
        <AppBar style={{ background: '#2E3B55' }} position="sticky">
          <Container style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '10px',
            padding: '10px'
          }}>
            <Box style={{ color: '#6c7588' }}>
              <Typography variant='h4'>Siddharth</Typography>
            </Box>
            <Box style={{ color: '#6c7588' }}>
              <Link to="/Contact"><Button variant="text">Contact</Button></Link> 
              <Button variant="text" onClick={handleLinkedin}>Linkedin</Button>
              <Button variant="text" onClick={handleResume}>Resume</Button>
            </Box>
          </Container>
        </AppBar>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App















