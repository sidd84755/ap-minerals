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
        position='fixed'
        width='100%'
        style={{zIndex:2,background:'linear-gradient(180deg, #000000 41.47%, rgba(0, 0, 0, 0) 100%)'}}
      >
        <header class="header">

            <a href="#" class="logo"> <i class="fas fa-sun"></i> Weather Station </a>

            <div id="menu-btn"><MenuIcon/></div>

            <nav class="navbar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Daily</a></li>
                    
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </header>
      </Stack>
    </>
  )
}

export default Navbar