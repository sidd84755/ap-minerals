import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { homefourthImg,homefourthImgMob } from '../assets'
import classes from './Home.module.css'

const HomeFourthSection = () => {
  return (
    <>
      <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} justifyContent='space-between'>
        <Box paddingLeft={{xs:'25px', sm:'30px',md:'200px'}} display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center'>
            <Typography fontSize={{xs:'24px',sm:'24px',md:'24px',lg:'20px'}} fontWeight={400} color='#A17337' fontStyle='italic'>
                Capabilities
            </Typography>
            <Box display='flex' flexDirection='column' gap='2rem' alignItems='flex-start'>
            <Typography fontSize={{xs:'42px',sm:'42px',md:'42px',lg:'48px'}} fontWeight={700} color='#1A1A1A' lineHeight={{xs:'49px',sm:'49px',md:'49px',lg:'56px'}}>
                Start-to-Finish<br/>
                Mining Services
            </Typography>
            <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}} paddingRight={{xs:'14px',sm:'14px',md:'100px',lg:'200px'}} fontWeight={400} color='#2E2E2E'>
                Coal being a vital part of our commodity portfolio and we are focused on running a profitable business in a safe, efficient, responsible and sustainable manner. We focus on
                conceptualizing and involving professionals, geologists in our
                operations to look after and carry out our mining and supplies
                on time, with an eye on quality and care for the environment. It
                is our sincere hope that we can build a strong relationship with
                companies and work in tandem with them to provide reliable
                services with the utmost care, honesty and integrity.
            </Typography>
            <Button className={classes.mybuttonsecond} component={Link} to='/operations' variant="outlined" style={{borderRadius:0,padding:'10px 60px',marginTop:'0.8rem',color:'#A17337',borderColor:'#A17337',textTransform:'capitalize',fontSize:'24px'}}>Learn More</Button>
            </Box>
        </Box>
        <Box>
            <img className={classes.homeimg1} src={homefourthImg} alt="banner" />
            <img className={classes.homeimg2} src={homefourthImgMob} alt="banner" />
        </Box>
      </Box>
    </>
  )
}

export default HomeFourthSection
