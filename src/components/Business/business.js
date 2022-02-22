import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg'
function Business(props) {
    const currentCategory = {
        name: "Business",
        description:"Photos of preview projects"
    };
  return (
    <section>
        <h1>
           {capitalizeFirstLetter(currentCategory.name)}
        </h1>
        <p>
            {currentCategory.name}
        </p>
        <div className='flex-row'>
            <img src= {photo} alt= 'Horiseon website'
           className='img-thumgnail mx-1'
           />
        </div>
    </section>
  )
}

export default Business