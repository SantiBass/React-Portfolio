import React from 'react'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Button } from '@material-ui/core'
import { fontSize } from '@mui/system';


function Footer() {
    const links = {
        gitHub: `https://github.com/SantiBass`,
        linkedIn: `https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/`,

    };
const styles={
    footer1:{
        with: '100%',
        height: 'auto',
        fontSize: "10px",
        position:'bottom'


    },
    list:{
        displayType: 'none',
        display: 'flex',
        justifyContent: "center",
        justifyContent: 'space-around'

    },
    links:{

        color: "white",
        fontSize :"30px",
        textDecoration: "none"

    }
    
    }
    
  return (
    


    <div style={styles.footer1} >
       
        <ul style={styles.list}>
        <li>
        <Button href={links.gitHub}without rel="noopener noreferrer">
            gitHub
        </Button>
        </li>
        <li>
        <Button>
            LinkedIn
        </Button>
        </li>
        <li>
            <Button  style={styles.links}href="#">sibarraryan@gmail.com</Button> 
        {/* <a >E-Mail to Max Mustermann</a>    Email */}
        </li>
        


        </ul>
        foot
        
        
        Footer
   </div>
  )
}

export default Footer