import React from 'react';
import { NavLink } from "react-router-dom"


function Nav() {
  const handleClick = () => {
    console.log("click handled")
  }
  return (
    <header className="flex-row px-1 header">
      <h2>
        <a data-testid="link" href="/home">
          <span role="img" aria-label="camera">
            {" "}
            💻
          </span>{" "}
          Let's Code! 
        </a>
      </h2>
      <nav>
        <ul className="flex-row ">
        <li className='stackOf mx-2'>
        <a href="https://stackoverflow.com/users/16930766/santiago-ibarra" alt="Stack-Overflow-Logo" i class="fa-brands fa-stack-overflow" aria-hidden="true"></a>
        </li>
        <li className='gitHubIcon mx-2'>
        <a href="https://github.com/SantiBass?tab=repositories" alt="GitHub-Logo"i class="fa fa-github" aria-hidden="true"></a>
        </li>
        <li className='linkedInIcon mx-2'>
        <a href="https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/" alt=" LinkedIn-Logo" i class="fa fa-linkedin-square" aria-hidden="true"></a>
        </li>
          <li className="mx-2">
            <NavLink to="/home" onClick={() => handleClick()}>
              Home
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/about" onClick={() => handleClick()}>
              About me
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/projects" onClick={() => handleClick()}>
              Projects
            </NavLink>
          </li>
          <li className={"mx-2"}>
            <NavLink to="/contact" onClick={() => handleClick()}>
              Contact
            </NavLink>
          </li>
          <li className={"mx-2"}>
            <NavLink to="/resume" onClick={() => handleClick()}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
