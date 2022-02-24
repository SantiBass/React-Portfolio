import React from 'react';
import coverImage from "../../assets/cover/santibasslogo.jpg";
function About() {
    return (
      
        <section className='my-5 About '>
         <div className='title'>  <span className='span'>Santiago</span>Ibarra Ryan</div>
          
          <img src={coverImage} className="my-2" style={{width: "35%",borderRadius:"8px"}} alt="cover" />
        
        
          <p>Description of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me here</p>
        </section>
      );
}

export default About;