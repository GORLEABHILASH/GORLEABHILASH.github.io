import './About.css';
import profilepicture from '../assets/profilepicture.png';

function About(){

    return (
        <>

        <main id="main" className="main--about" >
            
        
                <div className ="card--about">
                 <h2 className = "card__title--about card__title--card1--about" > About Me</h2>
                
                 <div className="card__content--about">
                <div className="card__image--about">
                  <img className = "card__picture--about" alt="A handsome man posing for a pic " src = {profilepicture}/> </div>
                  <div className="card__text--about">
  <p className="card__text--rows">
    Detail-oriented and highly motivated professional with 3.5 years of experience, I am driven by my passion for Full Stack Development and am on a mission to empower businesses with a compelling online presence. My journey began with a strong foundation in both front-end and back-end technologies, and I have since honed my skills in problem-solving, programming, Cloud, and analytics. My goal is to leverage these skills to contribute to and learn from a high-performing tech team.
  </p>

  <p className="card__text--rows">
    I hold a Master of Science in Information Systems from Northeastern University in Boston, MA, and a Bachelor of Technology in Electronics & Communication Engineering from Jawaharlal Nehru Technological University in Kakinada, India.
  </p>

  <p className="card__text--rows">
    My technical skills encompass a wide range of languages, including JavaScript, HTML, CSS, Java, Python, and SQL, along with frameworks like React.js and Node.js, and databases such as MySQL and Postgres. I am well-versed in various technologies, tools, and platforms, including AWS services like EC2, S3, Cognito, Lambda, Kinesis, and many others.
  </p>

  <p className="card__text--rows">
    In my professional experience, I worked as a Software Developer at Credera in Hyderabad, India, where I developed and implemented user-friendly features, resolved critical issues in AWS Cognito authentication, and optimized web application performance. I also leveraged AWS SES to design visually appealing email templates, enhancing brand image and user engagement. As an Application Development Analyst at Accenture in Chennai, India, I led the development of a Marketing Analytics Platform, optimized data transfer rates, and streamlined deployment processes.
  </p>
</div>


                
    
                    <div  className="card__list">
                            <ul className="card__text--skills">
                                <li className = "card__list--skillname"> <h4>Programming languages: </h4> <p  className = "card__list--skills"> JavaScript, HTML, CSS, Java, Python, SQL </p></li>
                                <li className = "card__list--skillname"> <h4>Web Technologies: </h4> <p  className = "card__list--skills"> React.js, Node.js, REST API, Docker, Serverless (AWS), Terraform</p></li>
                                <li className = "card__list--skillname"> <h4>Databases: </h4> <p  className = "card__list--skills"> MySQL, Postgres</p></li>
                                <li className = "card__list--skillname"> <h4>Tools/Libraries: </h4> <p  className = "card__list--skills"> GitHub Actions, GitHub, Postman, Visual Studio Code, Agile </p></li>

                            </ul>
                        </div>
                 
                </div>
              
                 
                </div>
        
             
            
          </main>
            
                </>
        
    );
}
export default About;