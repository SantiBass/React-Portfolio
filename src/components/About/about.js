import React from 'react';
import coverImage from "../../assets/cover/santibasslogo.jpg";
function About() {
    return (
      
        <section className='my-5 About pageHeight'>
          <h1 className='picTitle'>Who am I?</h1>
          
          <img src={coverImage} className="my-2" style={{width: "25%",borderRadius:"8px"}} alt="cover" />
        
        
          <p>Description of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me hereDescription of me here</p>
        </section>
      );
}

export default About;