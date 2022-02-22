import React from 'react';
import { NavLink } from "react-router-dom"
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [
    //   { name: 'Business', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    //  { name: 'portraits', description: 'Portraits of people in my life' },
    //  { name: 'food', description: 'Delicious delicacies' },
    //  { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   currentCategory,
  // } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            💻
          </span>{" "}
          Let's Code!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
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
            <NavLink to="/business" onClick={() => handleClick()}>
              Projects
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