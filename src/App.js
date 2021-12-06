

import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faJsSquare, faPython, faJava, faHtml5, faCss3Alt, faReact, faNodeJs } 
  from "@fortawesome/free-brands-svg-icons";
import { faMobile, faAt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="body">
        <div id="bio">
          <h3>Bio</h3>
          <p>I am Lolontle Moatshe, all my mates call me Lolo and I am 
            originally from Mahikeng in the North West. I am a mostly self-taught developer who wrote their 1st 
            line of code in December of 2019 and have never looked back since. I have always had an interest in
            technology and one of my best friends used to code in front of me and it fasinated me how he created
            something from just a couple hundred lines of code. I quickly realised the potential impact it could have on
            have on other people's lives but little did I know it would complete change my life in the best way.</p>
        </div>

        <div id="sovtech_answer">
          <h3>Why do i want to be a developer at SovTech</h3>
          <p>I have been following SovTech since I became aware of it just over a year ago and since then i've been inspired
            by the work you guys do; especially your recent game-changing acqusition of OfficeBox, and your core values; 
            which I feel resonates with mine. I believe you would be influential in my process of becoming a software developer
            as I would gain a lot of knowledge and develop personally from the variety of projects that you're invloved in and 
            people that you work with.
          </p>
        </div>

        <div id="contact_details">
          <h3>Contact Details</h3>
          <div className="phone_number">
            <FontAwesomeIcon icon={ faMobile } className="fa-2x"></FontAwesomeIcon>
            <p>072 213 4515</p>
          </div>
          <div className="email_address">
            <FontAwesomeIcon icon={ faAt } className="fa-2x"></FontAwesomeIcon>
            <a href="malito:lolontle.moatshe96@gamil.com"><p>lolontle.moatshe96@gamil.com</p></a>
          </div>
        </div>

        <div id="skills">
          <h3>Skills</h3>
          <h4>Programming Languages</h4>
          <div className="skills_icons">
            <div className="icon java">
              <FontAwesomeIcon icon={ faJava } className="fa-4x"></FontAwesomeIcon>
            </div>

            <div className="icon python">
              <FontAwesomeIcon icon={ faPython } className="fa-4x"></FontAwesomeIcon>
            </div>

              <div className="icon javascript">
                <FontAwesomeIcon icon={ faJsSquare } className="fa-4x"></FontAwesomeIcon>
              </div>

              <div className="icon html5">
                <FontAwesomeIcon icon={ faHtml5 } className="fa-4x"></FontAwesomeIcon>
              </div>

              <div className="icon css">
                <FontAwesomeIcon icon={ faCss3Alt } className="fa-4x"></FontAwesomeIcon>
              </div>
            </div>
          <h4>Frameworks</h4>
          <div className="icon react">
            <FontAwesomeIcon icon={ faReact } className="fa-4x"></FontAwesomeIcon>
          </div>
          <div className="icon nodeJs">
          <FontAwesomeIcon icon={ faNodeJs } className="fa-4x"></FontAwesomeIcon>
          </div>
          
          <h4>Databases</h4>
          <p>MongoDB</p>
          <p>SQL</p>
        </div>

        <div id="recognition">
          <h4>Blog Posts</h4>
          <a href="https://blog.hyperiondev.com/index.php/2020/12/02/student-spotlight-lolontle-moatshe-software-engineering-student/" 
          target="_blank" title="HyperionDev: Student Spolight" rel="noreferrer"><p>Student Spotlight</p></a>
          <a href="https://blog.hyperiondev.com/index.php/2021/03/17/lolontle-moatshe-stay-motivated-part-time-developer/" 
          target="_blank" title="HyperionDev: How to stay motivated as a part-time developer" rel="noreferrer"><p>How to stay motivated as a part-time developer</p></a>
        </div>
      </div>

      <footer>
        <div id="socials">
          <h4>Socials</h4>
          <div className="icon linkedIn">
            <a href="https://www.linkedin.com/in/lolontlemoatshe/" target="_blank" title="LinkedIn" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedinIn } className="fa-3x"></FontAwesomeIcon></a>
          </div>
          <div className="icon github">
            <a href="https://github.com/Lolontle/" target="_blank" title="Github" rel="noreferrer"><FontAwesomeIcon icon={ faGithub } className="fa-3x"></FontAwesomeIcon></a>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
