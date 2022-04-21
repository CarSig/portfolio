import "./productList.css";

import { products } from "../../data";
import ProjectCard from "../ProjectCard"
import Me from "../../img/air.jpg"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const projectData = [{
  id:1,
  name:"Flight delay",
  img:"https://apex.aero/wp-content/uploads/2020/08/integration_examples_2-1024x905.jpg",
  alt:"111",
  linkProject:"https://trusting-fermat-25b0c6.netlify.app/",
  linkGithub:"https://github.com/CarSig/airlinesReact/blob/master/src/components/FormSteps/ProblemChoice.js",
  text:"The National Science Foundation Network (NSFNET) was a program of coordinated, evolving projects sponsored by the National Science Foundation (NSF) from 1985 to 1995 to promote advanced research and education networking in the United States.",
  screenshots:[],
},{
  id:2,
  name:"DB app",
  img:"https://dv-website.s3.amazonaws.com/uploads/2022/01/kf_databasemanagementtrends_feb22.jpg",
  alt:"111",
  linkProject:"https://trusting-fermat-25b0c6.netlify.app/",
  linkGithub:"https://github.com/CarSig/airlinesReact/blob/master/src/components/FormSteps/ProblemChoice.js",
  text:"A service provider (SP) is an organization that provides services, such as consulting, legal, real estate, communications, storage, and processing services, to other organizations. Although a service provider can be an sub-unit of the organization that it serves, it is usually a third-party or outsourced supplier.",
  screenshots:[],
},{
  id:3,
  name:"3rd app",
  img:"https://upload.wikimedia.org/wikipedia/commons/e/ef/LYF_WATER_2_Smartphone.JPG",
  alt:"111",
  linkProject:"",
  linkGithub:"",
  text:"Type III SPs provide IT services to external customers and subsequently can be referred to as external service providers (ESPs)[2] which range from a full IT organization/service outsource via managed services or MSPs ",
  screenshots:[],
},{
  id:4,
  name:"4th app",
  img:"https://www.leaderbiography.com/wp-content/uploads/2020/10/iStock_71952335_LARGE-1024x683-1.jpg",
  alt:"111",
  linkProject:"https://trusting-fermat-25b0c6.netlify.app/",
  linkGithub:"https://github.com/CarSig/airlinesReact/blob/master/src/components/FormSteps/ProblemChoice.js",
  text:"nline service provider law is a summary and case law tracking page for laws, legal decisions and issues relating to online service providers (OSPs), like the Wikipedia and Internet service providers, ",
  screenshots:[],
}]

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
    
      <div className="XXXpl-list">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 12, md:16 }}>
        {projectData.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
        
          
          <ProjectCard  values={item} /></Grid>
        ))}
    
    </Grid>

      </div>
     

    </div>
  );
};

export default ProductList;