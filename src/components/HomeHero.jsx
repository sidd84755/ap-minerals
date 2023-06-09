import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { mainBg, mainsectionImg } from '../assets'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CustomizedDialogs from './Popup1'
import CustomizedDialogs1 from './popup'

const HomeHero = () => {
  return (
    <>
      <Box
        className={classes.bg2} 
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='1rem'
        sx={{height:'100vh', backgroundImage:`url(${mainBg})`,zIndex:1}}>
        <img src={mainsectionImg} alt="brand-logo" width='234px'/>
        <Typography fontSize={{xs:'36px',sm:'36px',md:'36px',lg:'60px',xl:'60px'}} fontWeight={500} textAlign='center' color='#E5E5E5' lineHeight={{xs:'42px',sm:'42px',md:'42px',lg:'70px',xl:'70px'}}>
        The Coal Mining &<br/>Trading Company
        </Typography>
        <Button className={classes.mybutton} component={Link} to='/operations' variant="contained" style={{borderRadius:0,padding:'10px 60px',marginTop:'20px',color:'#fff',backgroundColor:'#A17337',textTransform:'capitalize',fontSize:'28px'}}>What We Do</Button>
        <Box display='flex' flexDirection='row' alignItems='center' mt='50px'>
          <Box>
            <Typography fontSize={{xs:'16px',sm:'16px',md:'18px',lg:'18px',xl:'18px'}} fontWeight={600} textAlign='center' color='#E5E5E5'>
              Company Profiles:
            </Typography>
          </Box>
          <Box display='flex' flexDirection={{xs:'column', sm:'column',md:'row'}} alignItems='center'>
            <Box>
              <CustomizedDialogs1/>         
            </Box>
            <Box>
              <CustomizedDialogs/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HomeHero
