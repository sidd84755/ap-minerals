import React, { useEffect, useState } from 'react'
import { Stack, Box, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../assets'
import classes from './About.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './aboutnavbar.scss';
import './script.js';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    
    <>
      <Stack
        paddingY={{md: 2}}
        position='fixed'
        width='100%'
        style={{zIndex:2,background:'rgba(0, 0, 0, 0.75)'}}
      >
        <header className="header">
          <div className="header__content">
            <Link to='/'>
              <img className='mlogo' src={Logo} alt="brand-logo"/>
            </Link>
            <nav
              className={`${"header__content__nav"} 
              ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
              }`}
            >
              <ul>
                    <Link className={classes.navlink} to='/about' style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500}}>About</Link>
                        
                    <Link className={classes.navlink} to='/operations' style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500}}>Our Operations</Link>

                    <Button className={classes.navlink} component={Link} to='/contact' variant="outlined" style={{color:'#cda571',borderColor:'#cda571',borderRadius:'0',textTransform:'capitalize', fontSize:'20px'}}>Contact Us</Button>
              </ul>
            </nav>
            <div className="header__content__toggle">
              {!menuOpen ? (
                <MenuIcon style={{color: '#CDA571'}} onClick={menuToggleHandler} />
              ) : (
                <CloseIcon onClick={menuToggleHandler} />
              )}
            </div>
          </div>
        </header>
      </Stack>
    </>
  )
}

export default Navbar