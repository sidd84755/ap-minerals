import React from 'react'
import { Stack, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '../assets'
import classes from './About.module.css'

const Navbar = () => {
  return (
    <>
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 40}}
        justifyContent='space-evenly'
        alignItems='center'
        
        paddingY={{md: 4}}
        position='fixed'
        width='100%'
        style={{zIndex:2,background:'rgba(0, 0, 0, 0.75)'}}
      >
        <Link to='/'>
          <img src={Logo} alt="brand-logo"/>
        </Link>
        
        <Stack direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4}}
        justifyContent='flex-start'
        alignItems='center'
        
        >
            <Link className={classes.navlink} to='/about' style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500}}>About</Link>
            <Link className={classes.navlink} to='/operations' style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500}}>Our Operations</Link>
            <Button className={classes.navlink} component={Link} to='/contact' variant="outlined" style={{color:'#cda571',borderColor:'#cda571',borderRadius:'0',textTransform:'capitalize', fontSize:'20px'}}>Contact Us</Button>
        </Stack>
      </Stack>
    </>
  )
}

export default Navbar