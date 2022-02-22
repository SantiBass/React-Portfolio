import React from 'react';
import Photolist from '../../Photolist/photolist';
import {capitalizeFirstLetter} from '../../utils/helpers';
// import photo from '../../assets/small/commercial/0.jpg'
function Business({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <Photolist/>
      </section>
    );
  }
  
  export default Business;