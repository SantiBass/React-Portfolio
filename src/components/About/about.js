import React from 'react';
import coverImage from "../../assets/cover/santibasslogo.jpg";
function About() {
    return (
      
        <section className='my-5 About '>
         <div className='title'>  <span className='span'>Santiago</span>Ibarra Ryan</div>
          
          <img src={coverImage} className="my-2" style={{width: "35%",borderRadius:"8px"}} alt="cover" />
        
        
          <p>I am a web developer who strives to understand the technology I'm using. By fully comprehending what I build and use, I can more efficiently troubleshoot broken apps and web pages. Before becoming a web developer, I spent a decade helping customers at Trader Joe's and teaching Spanish in California. When I'm not developing web content, I like to spend time with my wife and son and play the bass guitar with in several musical collaborations.</p>
        </section>
      );
}

export default About;