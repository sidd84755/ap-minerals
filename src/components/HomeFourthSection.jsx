import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { homefourthImg } from '../assets'
import classes from './Home.module.css'

const HomeFourthSection = () => {
  return (
    <>
      <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} justifyContent='space-between'>
        <Box paddingLeft={{xs:'25px', sm:'30px',md:'200px'}} display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center'>
            <Typography fontSize={{xs:'12px',sm:'16px',md:'20px',lg:'20px'}} fontWeight={400} color='#A17337' fontStyle='italic'>
                Capabilities
            </Typography>
            <Box display='flex' flexDirection='column' gap='2rem' alignItems='flex-start'>
            <Typography fontSize={{xs:'16px',sm:'22px',md:'32px',lg:'48px'}} fontWeight={700} color='#1A1A1A' lineHeight='56px'>
                Start-to-Finish<br/>
                Mining Services
            </Typography>
            <Typography fontSize={{xs:'12px',sm:'14px',md:'14px',lg:'14px'}} fontWeight={400} color='#2E2E2E'>
                Coal being a vital part of our commodity portfolio and we are<br/>focused on running a profitable business in a safe, efficient,<br/>responsible and sustainable manner. We focus on
                conceptualizing<br/>and involving professionals, geologists in our
                operations to look<br/>after and carry out our mining and supplies
                on time, with an eye on<br/>quality and care for the environment. It
                is our sincere hope that we<br/>can build a strong relationship with
                companies and work in tandem<br/>with them to provide reliable
                services with the utmost care, honesty<br/>and integrity.
            </Typography>
            <Button className={classes.mybuttonsecond} component={Link} to='/operations' variant="outlined" style={{borderRadius:0,padding:'10px 60px',marginTop:'0.8rem',color:'#A17337',borderColor:'#A17337',textTransform:'capitalize',fontSize:'24px'}}>Learn More</Button>
            </Box>
        </Box>
        <Box>
            <img src={homefourthImg} alt="banner" />
        </Box>
      </Box>
    </>
  )
}

export default HomeFourthSection
