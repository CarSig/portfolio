import "./about.css";
import MeBW from "../../img/l2.jpg"
import air from "../../img/air.jpg"
import CV from "../../img/CV.pdf"

import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const iconTextStyles = { fontSize: '18px', '&:hover': {
  backgroundColor: '#fff',
  color: '#3c52b2',

}, }
const iconStyles = {marginRight:"15px"}

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={MeBW}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
       
        <a href={CV} download  style={{ textDecoration: 'none' }}>
        

          
            <IconButton aria-label="Project" variant="text"  sx={iconTextStyles}>
              <FileDownloadIcon sx={iconStyles}/> Download CV
            </IconButton >
        
        </a>

        <a href="https://www.linkedin.com/in/lovro-boric/"   style={{ textDecoration: 'none' }}>
        <IconButton aria-label="Images" variant="text"  sx={iconTextStyles}>
              <LinkedInIcon sx={iconStyles}/> LinkedIn
            </IconButton > 
            </a>

    
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
    
      </div>
    </div>
  );
};

export default About;