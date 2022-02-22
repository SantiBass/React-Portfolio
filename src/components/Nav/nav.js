import React from 'react';
import { NavLink } from "react-router-dom"
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [
    { name: 'Business', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 💻</span> Lets Code!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <NavLink to="/about" onClick={() => handleClick()}>
              About me
            </NavLink>
          </li>
          <li className={"mx-2"}>
            
            <NavLink to="/contact" onClick={() => handleClick()}>
              Contact
            </NavLink>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <NavLink to={"/" + category.name} onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
