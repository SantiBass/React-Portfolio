import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material'
function Home() {
  const links = {
    gitHub: `https://github.com/SantiBass`,
    linkedIn: `https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/`

  };
  return (

    <>

      <div className='welcome pageHeight'>

        Santiago Ibarra Ryan.
        <ul style={{ justifyContent: 'center' }} className='flex-row '>
          <li className='hook'>Learning Never Stops</li>
          <li className='hook'>Web Developer</li>
          <li className='hook'>Musician</li>
        </ul>
        <div >hi
          <ul style={{ justifyContent: 'center' }} className='flex-row '>
            <li className='hook'>
              <button className='button large  is-rounded'> <a href={links.gitHub} without rel="noopener noreferrer" target="_blank"></a>
                <GitHubIcon style={{ width: '100px', height: "50px" }} />
              </button>
            </li>
            <li className='hook'>
              <button className='button large  is-rounded'> <a href={links.linkedIn} without rel="noopener noreferrer" target="_blank"> </a>
               
                <LinkedIn style={{ width: '100px', height: "50px" }} />
              </button>
            </li>
          </ul>
        </div>
      </div>

    </>

  )
}
export default Home