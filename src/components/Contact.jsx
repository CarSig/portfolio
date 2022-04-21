
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import "./intro/intro.css" 
import React, { useRef } from 'react'
import "./productList/productList.css";
import { width } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import Drawer from '@mui/material/Drawer';
import emailjs from '@emailjs/browser';




const field ={marginTop: "1px", marginBottom:"10px" ,width:"70vh"}

const iconTextStyles = { fontSize: '18px', '&:hover': {
    backgroundColor: '#fff',
    color: '#3c52b2',
  }, }
  const iconStyles = {marginRight:"15px"}

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbfffqg', 'template_bep4zx8', form.current, 'nXutX7K1sXMHcNI0h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

<div className="i">
<div className="i-left"> 
<div className="i-left-wrapper">
<Container>
  <IconButton aria-label="Images" variant="text"  sx={iconTextStyles}>
              <EmailIcon sx={iconStyles}/> email : lovro.boric@gmail.com
            </IconButton >   
     <br></br>
            <IconButton aria-label="Images" variant="text"  sx={iconTextStyles}>
              <PhoneAndroidIcon sx={iconStyles}/> phone: +4917640454763
            </IconButton > 
            
        </Container>

</div></div>

         
          
          
          
  <div className="i-right"  style={{backgroundColor:"ffffff"}}>
    
  <form ref={form} onSubmit={sendEmail}> <Typography variant="body2" color="text.secondary">
       Send me a message:
      </Typography>
         <TextField name="user_name" label="name" fullWidth sx={field} ></TextField> 
         <TextField name="user_subject" label="subject" fullWidth sx={field} ></TextField> 
         <TextField name="user_email" label="email"  fullWidth  sx={field}></TextField> 
         <TextField name="message" label="message" fullWidth multiline rows={8} sx={field}></TextField> 
<br></br>
<button type="submit">ss</button>
         <IconButton aria-label="Images" variant="text"  color='primary' sx={iconTextStyles}>
              <SendIcon sx={iconStyles}/> Submit
            </IconButton > 
    </form>
   </div>


   <Drawer
           
            open
            anchor="left"
            variant="permanent"
          >
         
          </Drawer>

  </div>


 
  )
}

export default Contact