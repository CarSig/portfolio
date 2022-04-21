import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { red } from '@mui/material/colors';

import VisibilityIcon from '@mui/icons-material/Visibility' ;
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImageIcon from '@mui/icons-material/Image';

import air from "../img/air.jpg"
import "./projectCard.css";
import CardPopup from "./CardPopup";



import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const iconTextStyles = { fontSize: '18px', '&:hover': {
  backgroundColor: '#fff',
  color: '#3c52b2',
}, }
const iconStyles = {marginRight:"15px"}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
 
  const togglePopup = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));





 const ProjectCard = ({values}) => {


  //

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

 

  //
    const [expanded, setExpanded] = React.useState(false);
    const [popup,setPopup]=  React.useState(false);
  
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const handleTogglePopup =() => {
      setPopup(!popup)
    }
 
    return (
      <Card  sx={{ maxWidth: 345 , minWidth:250}}>
       
        <CardMedia
          component="img"
          height="250"
          image={values.img}
          alt={values.alt}
        />
        <CardContent>

       <div style={{display:"flex"}}>  <Typography variant="h6" color="text.secondary" sx={{textAlign:"center", fontSize: '20px'}}>
          {values.name}

          </Typography> 
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ '&:hover': {
              backgroundColor: '#fff',
              color: '#3c52b2',
          },}}
            
          >
            <ExpandMoreIcon />
            
          </ExpandMore></div>
        
          <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ textAlign:"left"}}>
          <CardContent>
           
          <Typography variant="body2" color="text.secondary">
          {values.text}

          </Typography>
      
            
          </CardContent>

        </Collapse>
         
        </CardContent >

        <div style={{display:"flex", backgroundColor:red}} onClick={handleClickOpen}> 
          <CardActions className='pc'> 
            <IconButton aria-label="Images" variant="text"  sx={iconTextStyles}>
              <ImageIcon sx={iconStyles}/> Images
            </IconButton >    
          </CardActions>  
          </div>
         

        <a href={values.linkProject} target="_blank"  rel="noreferrer"  style={{ textDecoration: 'none' }}>
          <CardActions  className='pc' disableSpacing>
            <IconButton aria-label="Project" variant="text"  sx={iconTextStyles}>
              <VisibilityIcon sx={iconStyles}/> Project
            </IconButton >
          </CardActions>
        </a>
        
        <a href={values.linkGithub} target="_blank"  rel="noreferrer"  style={{ textDecoration: 'none' }}>
        <CardActions className='pc'>      
        
            <IconButton aria-label="Github" variant="text"  sx={iconTextStyles}>
            <GitHubIcon sx={iconStyles} />   Github 
          </IconButton>
          </CardActions>
          </a>
        
        <CardActions>
      
       
        </CardActions>

        
    
    




    {open && 
    
    <div>
      {/* <CardPopup  open={open}  handleClickOpen={handleClickOpen} handleClose={handleClose}/> */}
      
      
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{values.name} images</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {values.text}
          </DialogContentText>
          <img src={air} alt="" srcset="" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
         
        </DialogActions>
      </Dialog>
      
      </div>
    }





      </Card>
    );
  }
 export default ProjectCard