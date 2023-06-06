import React from 'react'
import { Stack, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '../assets'
import classes from './Home.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';
import './script.js';

const Navbar = () => {
  return (
    <>
      <Stack
        paddingY={{md: 4}}
        position='fixed'
        width='100%'
        style={{zIndex:2,background:'linear-gradient(180deg, #000000 41.47%, rgba(0, 0, 0, 0) 100%)'}}
      >
        <header className="header">

            <Link to='/'>
              <img className='mlogo' src={Logo} alt="brand-logo"/>
            </Link>

            <div id="menu-btn"><MenuIcon/></div>

            <nav className="navbar">
            <Stack direction={{ xs: "column", sm: "column", md: "column", lg:'row'}}
              spacing={{ xs: 10, sm: 20, md: 4}}
              justifyContent='flex-start'
              alignItems='center'
              mt={{xs:'50px',sm:'60px',md:'70px',lg:'0'}}
            >
                  <Link className={classes.navlink} to='/about' style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500}}>About</Link>
                  <Link className={classes.navlink} to='/operations' style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500}}>Our Operations</Link>
                  <Button className={classes.navlink} component={Link} to='/contact' variant="outlined" style={{color:'#cda571',borderColor:'#cda571',borderRadius:'0',textTransform:'capitalize', fontSize:'20px'}}>Contact Us</Button>
            </Stack>    
            </nav>
        </header>
      </Stack>
    </>
  )
}

export default Navbar