import React from 'react';
import coverImage from "../../assets/cover/santibasslogo.jpg";
function About() {
    return (
        <section className='my-5'>
          <h1 id="about">Who am I?</h1>
          <img src={coverImage} className="my-2" style={{width: "50%",borderRadius:"8px"}} alt="cover" />
        </section>
      );
}

export default About;