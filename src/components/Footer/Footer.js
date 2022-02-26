import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material'
import { Icon } from '@iconify/react'

function Footer() {
    const links = {
        gitHub: `https://github.com/SantiBass`,
        linkedIn: `https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/`,
    };
    const styles = {
        footer1: {
            backgroundColor: "black",
            color: "white",
            with: '100%',
            height: 'auto',
            fontSize: "10px",
            position: 'bottom'
        },
        list: {
            displayType: 'none',
            display: 'flex',
            justifyContent: "center",
           
            fontSize: "100px"
        },
        links: {
            textDecoration: "none",
            color: "white"
        },
        button: {
            backgroundColor: "green",
            width: "5vw",
            height: ""
        }
    }
    return (
        <div className='footer1'  >

            <ul style={styles.list}>
                <li  >
                    <button className='button large  is-rounded'> <a href={links.gitHub} without rel="noopener noreferrer" target="_blank">stackOverflow</a>
                        < Icon icon="mdi:stack-overflow" />
                        <stackOverflow style={{ width: '100px', height: "50px" }} />
                    </button>
                    <></>
                </li>
                <li>
                    <button className='button large  is-rounded'  ><a href={links.gitHub} without rel="noopener noreferrer" target="_blank">GitHub</a>
                        <GitHubIcon style={{ width: '100px', height: "50px" }} />
                    </button>
                    <></>
                </li>
                <li>
                    <button className='button large  is-rounded' ><a href={links.linkedIn} without rel="noopener noreferrer" target="_blank">LinkedIn</a>
                        <LinkedIn style={{ width: '90px', height: "50px" }} />
                    </button>
                </li>
                <li>
                    <button className='button large  is-rounded' ><a href="mailto:sibarraryan@gmail.com">sibarraryan@gmail.com</a></button>
                </li>
            </ul>
        </div>
    )
}

export default Footer