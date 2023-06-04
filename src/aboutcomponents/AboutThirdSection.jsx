import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import classes from './About.module.css'

const AboutThirdSection = () => {
  return (
    <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} display='flex' flexDirection='row' justifyContent='center' textAlign='center' backgroundColor='#A17337'>
    <Box display='flex' flexDirection='column' alignItems='center' gap='2rem'>
        <Typography lineHeight='56.94px' fontSize={{xs:'16px',sm:'22px',md:'30px',lg:'48px'}} fontWeight={700} color='#e5e5e5'>
            What We Do
        </Typography>
        <Typography lineHeight='20px' fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={500} color='#e5e5e5'>
            We endure to supply and deliver our coal reliably,
            efficiently, and responsibly to<br/>countries where coal
            continues to play a leading role in power generation given
            its<br/>reliability and affordability. We intend to add value to
            the global trade in natural<br/>resources with exceptional
            service and performance across the supply chain.
        </Typography>
        <Button className={classes.mybuttonsecond} component={Link} to='/operations' variant="outlined" style={{borderRadius:0,padding:'10px 60px',marginTop:'0.8rem',color:'#fff',borderColor:'#fff',textTransform:'capitalize',fontSize:'24px'}}>Learn More</Button>
    </Box>
    </Box>
  )
}

export default AboutThirdSection
