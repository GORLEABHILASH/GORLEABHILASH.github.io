import React from 'react';
import './Services.css';
import  { useState } from 'react';
import QA from '../assets/QA.avif';
import websitedeployment from '../assets/websitedeployment.jpg';
import websitedesign from '../assets/websitedesign.avif';
import websitedevelopment from '../assets/websitedevelopment.jpg';
import cloud from '../assets/cloud.jpg';
import Devops from '../assets/Devops.jpg';


import Modal from './Modal';
import Button from './Button';

function Services({ onButtonClick }) {
 
    return (

     
     
      <div className="home">
      <main id="main" className="main">
        <ul className="main__list">
          <li className="main__item">
          <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick} url="https://github.com/GORLEABHILASH/react-spa-demo">
              <h2 className="card__title">Website Development</h2>
              <img
                className="card__picture"
                alt="picture of code written on a computer"
                src= {websitedeployment}
              />
              <div className="card__text">
               Proficient Software Developer with expertise in user-friendly features, critical issue resolution, and optimization for enhanced website performance
               
              </div>
              
              
              </Button> 
          </li>

          <li className="main__item">
          <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick} url="https://github.com/GORLEABHILASH/react-spa-demo">
              <h2 className="card__title">Website Design</h2>
              <img
                className="card__picture"
                alt="picture of a website design"
                src={websitedesign}
              />
              <div className="card__text">
               Creative and functional website design skills showcased in projects like CareWallet and Smart-City, emphasizing a seamless user experience.
               
              
              
              </div>
  
              </Button> 
          </li>


          <li className="main__item">
          <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick} url="https://github.com/GORLEABHILASH/react-spa-demo">
              <h2 className="card__title">Website Deployment</h2>
              <img
                className="card__picture"
                alt="picture of a website health status"
                src={websitedevelopment}
              />
              <div className="card__text">
                Experienced in streamlined deployment processes, ensuring consistency and accelerating release cycles using tools like Terraform and GitHub
                
               
              
              </div>
            
              </Button> 
          </li>

          <li className="main__item">
          <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick} url="https://github.com/GORLEABHILASH/react-spa-demo">
              <h2 className="card__title">Cloud</h2>
              <img
                className="card__picture"
                alt="picture of cloud example cloud architecture diagram"
                src= {cloud}
              />
              <div className="card__text">
                AWS-certified professional with hands-on experience in implementing and optimizing various Amazon Web Services for improved system performance
              
              </div>
              
              </Button> 
          </li>

          <li className="main__item">
          <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick} url="https://github.com/GORLEABHILASH/react-spa-demo">
              <h2 className="card__title">DevOps</h2>
              <img
                className="card__picture"
                alt="picture of devops architecture"
                src={Devops}
              />
              <div className="card__text">
                Demonstrated excellence in DevOps practices, minimizing deployment time, ensuring consistency, and accelerating release cycles through tools like Terraform and GitHub
               
          
            </div>
            </Button> 
          </li>


          <li className="main__item">
          <Button type = "button" visual = "link" card="yes"  onClick={onButtonClick} url="https://github.com/GORLEABHILASH/react-spa-demo"
             aria-label="Quality Assurance - Committed to ensuring software quality through proactive measures, evident in projects that showcase optimization, efficient data processing, and issue resolution">
              <h2 className="card__title">QA</h2>
              <img
                className="card__picture"
                alt="picture of a person performing testing"
                src={QA}
              />
              <div className="card__text">
                Committed to ensuring software quality through proactive measures, evident in projects that showcase optimization, efficient data processing, and issue resolution
            
           
            
            </div>
            </Button>
          </li>


          
         
        </ul>
      </main>
    </div>
  );
   
    
}
export default Services;