import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { mainsectionImg } from '../assets'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link as NewLink} from 'react-router-dom';
import classes from './Home.module.css'

const Footer = () => {
  return (
    <>
        <Box display='flex' flexDirection='column' gap='3rem' backgroundColor='#000' borderTop='25px solid #CDA571' paddingY={{xs:'15px', sm:'20px',md:'40px'}} paddingX={{xs:'15px', sm:'20px',md:'40px'}}>
            <Box display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} justifyContent={{xs:'center',sm:'center',md:'space-evenly'}} alignItems={{xs:'center',sm:'center',md:'flex-start'}} gap={{xs:'2rem',sm:'2rem',md:'0'}}>
                <Box>
                    <img src={mainsectionImg} alt="brand-logo" />
                </Box>
                <Box display='flex' flexDirection='column' gap='2rem'>
                    <Box display='flex' flexDirection='row' gap='1rem'>
                        <MailOutlinedIcon style={{color:'#A17337'}} fontSize='large'/>
                        <Box lineHeight='28px'>
                            <Link href='mailto:info@apmineral.in'
                                style={{textDecoration:'none',color:'#CDA571',fontSize:'14px',fontWeight:400}}
                            >info@apmineral.in</Link><br/>
                            
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='row' gap='1rem'>
                        <PhoneOutlinedIcon style={{color:'#A17337'}} fontSize='large'/>
                        <Box lineHeight='28px'>
                            <Link href='tel:+60176202105'
                                style={{textDecoration:'none',color:'#CDA571',fontSize:'14px',fontWeight:400}}
                            >+60 17 620 2105
                            </Link><br/>
                            <Link href='tel:+919893115454'
                                style={{textDecoration:'none',color:'#CDA571',fontSize:'14px',fontWeight:400}}
                            >+91 98931 15454</Link>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='row' gap='1rem'>
                        <LocationOnOutlinedIcon style={{color:'#A17337'}} fontSize='large'/>
                        <Box lineHeight='28px'>
                            <Typography color='#CDA571' fontWeight={400} fontSize='14px'>
                                8 Avenue Business Centre,<br/>
                                A-3-9, Jalan 8/1, 46050 Petaling Jaya,<br/>
                                Selangor, Malaysia.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} gap='3rem' textAlign='center'>
                    <NewLink to='/' className={classes.navlink} style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500, fontFamily:'Roboto'}}>Home</NewLink>
                    <NewLink to='/about' className={classes.navlink} style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500, fontFamily:'Roboto'}}>About</NewLink>
                    <NewLink to='/operations' className={classes.navlink} style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500, fontFamily:'Roboto'}}>Operations</NewLink>
                    <NewLink to='/contact' className={classes.navlink} style={{textDecoration:'none',color:'#CDA571',fontSize:'20px',fontWeight:500, fontFamily:'Roboto'}}>Contact Us</NewLink>
                </Box>
            </Box>
            <Box display='flex' flexDirection='row' gap='3rem' paddingX={{xs:'15px', sm:'20px',md:'150px'}}>
                <Typography color='#C6C6C6' fontWeight={400} fontSize='14px' fontFamily='Roboto'>
                    © 2023 AP Mineral
                </Typography>
                <Typography color='#C6C6C6' fontWeight={400} fontSize='14px' fontFamily='Roboto'>
                    Designed & Developed by Charlie Art
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default Footer
