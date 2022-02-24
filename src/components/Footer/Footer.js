import React from 'react'
import  GitHubIcon  from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material'
import { Button } from '@material-ui/core'
import { height } from '@mui/system';




function Footer() {
    const links = {
        gitHub: `https://github.com/SantiBass`,
        linkedIn: `https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/`,

    };
const styles={
    footer1:{
        backgroundColor: "black",
        color:"white",
        with: '100%',
        height: 'auto',
        fontSize: "10px",
        position:'bottom'


    },
    list:{
        displayType: 'none',
        display: 'flex',
        justifyContent: "center",
        justifyContent: 'space-around',
         fontSize: "100px"
       

    },
    links:{
        textDecoration: "none",
        color:"white"
    },
    button:{
        backgroundColor: "green",
        width: "5vw",
        height: ""

    }
    
    }
    
  return (
    


    <div style={styles.footer1} >
       
        <ul style={styles.list}>
        <li>
        <Button variant='contained'  color="primary"href={links.gitHub}without rel="noopener noreferrer" target="_blank">GitHub
            <GitHubIcon />
        </Button>
        <></>
        </li>
        <li>
        <Button variant="contained"  color="primary"href={links.linkedIn}without rel="noopener noreferrer" target="_blank">
            LinkedIn
            <LinkedIn  variant="contained" color="primary"/>
        </Button>
        </li>

        <li>
            <button style={styles.button}></button>
        </li>
        <li >
            <Button variant="contained" color="primary" style={styles.links}href="mailto:sibarraryan@gmail.com">sibarraryan@gmail.com</Button> 
        
        </li>
        


        </ul>
        
   </div>
  )
}

export default Footer