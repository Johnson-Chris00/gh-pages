import React from "react";
import github from "../../assets/github-mark-white.png"; 
import linkedin from "../../assets/linkedin-blue-logo-icon.svg";
import "../../styles/styles.css";

let members = [
  {name: 'Bryce Kelly', linkedin: 'https://www.linkedin.com/in/-brycekelly', github: 'https://github.com/BryceK2', photo: 'https://avatars.githubusercontent.com/u/108435897?v=4'},
  {name: 'Chris Johnson', linkedin: 'https://www.linkedin.com/in/johnson-chris00', github: 'https://github.com/Johnson-Chris00', photo: 'https://avatars.githubusercontent.com/u/14811666?v=4'},
  {name: 'Joseph Dafesh', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/JosephDafesh', photo: 'https://avatars.githubusercontent.com/u/148285698?v=4'},
  {name: 'Sean Nguyen', linkedin: 'https://www.linkedin.com/in/sean-nguyen-cpslo/', github: 'https://github.com/seannguyen96', photo:'https://avatars.githubusercontent.com/u/26880119?s=400&u=94f7e8ea169586b630323f7a3e4ea6ea01922403&v=4'},
];


function Contact() {
  return (

    <div id="ContactsOverallDiv" className="contact-boxes">
      {members.map((member, index) => (
        <div className="contact-box" key={index} align="center">
            <div id="photo-holder"> 
              <img id="photo-link" src={member.photo}></img>
            </div>
            <div className="name">
              {member.name}
            </div>
            <hr className="line"></hr>
            <span>
              <a target="_blank" href={member.linkedin}>
                <img id="link-img" src={linkedin}></img>
              </a>
            </span>
            <span>
              <a target="_blank" href={member.github}>
                <img id="git-img" src={github}></img>
              </a>
            </span>
        </div>
      ))}
    </div>
  );
}


export default Contact;