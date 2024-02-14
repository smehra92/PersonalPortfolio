import { useState } from "react"
import TextField from '@mui/material/TextField';
import { Box, Button } from "@mui/material";

function Contact() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return <>
    <Box sx={{textAlign:"center", padding:"20px"}}>
    <TextField
          id="outlined-required"
          label="Name"
          defaultValue=""
          onChange={(e) => {setName(e.target.value)}}
        />
        <br />
        <TextField
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e) => {setName(e.target.value)}}
        />
        <br />
        <TextField
          id="outlined-multiline-static"         
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          onChange={(e) => {setName(e.target.value)}}
        />
        <br />
        <br />
        <Button variant="contained">Submit</Button>
        </Box>
    </>
}

export default Contact