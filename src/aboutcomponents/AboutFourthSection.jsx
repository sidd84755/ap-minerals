import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import classes from './About.module.css'
import { founderA, founderB } from '../assets'

const AboutFourthSection = () => {
  return (
    <Box paddingY={{xs:'25px', sm:'30px',md:'60px'}} display='flex' flexDirection='column' alignItems='center' gap='4rem'>
        <Box display='flex' flexDirection='row' gap={{xs:'1rem',sm:'1rem',md:'1rem',lg:'1rem',xl:'2.6rem'}} alignItems='center'>
            <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                <img src={founderA} alt="" style={{backgroundColor:'#A17337'}}/>
                <Typography lineHeight='69px' fontSize={{xs:'16px',sm:'22px',md:'30px',lg:'40px'}} fontWeight={900} color='#A17337'>
                    AMIT PANDEY
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                <img src={founderB} alt="" style={{backgroundColor:'#A17337'}}/>
                <Typography lineHeight='69px' fontSize={{xs:'16px',sm:'22px',md:'30px',lg:'40px'}} fontWeight={900} color='#A17337'>
                    PRAMOD KOVE
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center' textAlign='center' gap='1rem'>
                <Typography lineHeight='56px' fontSize={{xs:'16px',sm:'22px',md:'30px',lg:'48px'}} fontWeight={700} color='#A17337'>
                    Leadership
                </Typography>
                <Typography lineHeight='24px' fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'18px'}} fontWeight={600} color='#2E2E2E'>
                    “Our passion for work and customer oriented<br/>approach is
                    clearly seen in our functioning,<br/>
                    which is done keeping
                    our clients in mind.”
                </Typography>
            </Box>
        </Box>
        <Box>
            <Typography fontSize={{xs:'12px',sm:'16px',md:'18px',lg:'20px'}} fontWeight={400} fontStyle='italic' color='#A17337'>
                Our Team
            </Typography>
            <Box display='flex' flexDirection='row'  gap='8rem'>
                
                <Box >
                    
                    <Typography lineHeight='56px' fontSize={{xs:'16px',sm:'22px',md:'44px',lg:'48px'}} fontWeight={700} color='#1A1A1A'>
                    Dedicated<br/>Professionals
                    </Typography>
                </Box>
                <Box >
                    <Typography fontSize={{xs:'12px',sm:'14px',md:'14px',lg:'14px'}} fontWeight={400} color='#2E2E2E'>
                        We are fortunate enough to have a team of
                        expert professionals and highly skilled team and
                        employees with in-depth knowledge related to
                        this particular field of interest. Our client-centric
                        strategy and ability to channelize all our
                        endeavors in a proper direction is a step forward
                        to satisfy our clients in an optimum manner.
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutFourthSection
