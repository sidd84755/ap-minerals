import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import classes from './About.module.css'
import { diamond, medal, target, cardBg } from '../assets'

const AboutFifthSection = () => {
  return (
    <Box display='flex' flexDirection='row' justifyContent='center' gap='1rem'>
        <Box display='flex' flexDirection='column' gap='2rem' paddingY='4rem' paddingX='2rem' sx={{backgroundImage:`url(${cardBg})`}}>
            <Box display='flex' flexDirection='row' gap='1rem' alignItems='center'>
                <img src={target} alt="" height='50px' width='50px'/>
                <Typography lineHeight='46px' fontSize={{xs:'16px',sm:'22px',md:'34px',lg:'40px'}} fontWeight={700} color='#CDA571'>
                    Our Goals
                </Typography>
            </Box>
            <Typography lineHeight='20px' fontSize={{xs:'12px',sm:'12px',md:'12px',lg:'14px'}} fontWeight={400} color='#E5E5E5'>
                Our long term goal is to become one
                of the<br/>leading, sustainable and an
                efficient medium<br/>sized coal producer
                and trader. Our primary<br/>focus is on
                coal production in Indonesia, but we<br/>
                may also diversify in to other
                minerals and<br/>countries over time.
            </Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap='2rem' paddingY='4rem' paddingX='2rem'sx={{backgroundImage:`url(${cardBg})`}}>
            <Box display='flex' flexDirection='row' gap='1rem' alignItems='center'>
                <img src={diamond} alt="" height='50px' width='50px'/>
                <Typography lineHeight='60.94px' fontSize={{xs:'16px',sm:'22px',md:'34px',lg:'40px'}} fontWeight={700} color='#CDA571'>
                    Our Values
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='0.8rem'>
                <Typography lineHeight='28px' fontSize={{xs:'12px',sm:'12px',md:'12px',lg:'20px'}} fontWeight={500} color='#E5E5E5'>
                    People Safety
                </Typography>
                <Typography lineHeight='20px' fontSize={{xs:'12px',sm:'12px',md:'12px',lg:'14px'}} fontWeight={400} color='#E5E5E5'>
                    People are our most important asset. The mines are<br/>built
                    and operated by our team of people and it is our<br/>highest
                    priority to create and maintain a safe and<br/>healthy working
                    environment for them. We are<br/>constantly searching for
                    new and innovative methods to<br/>ensure the safety of our
                    people.
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='0.8rem'>
                <Typography lineHeight='28px' fontSize={{xs:'12px',sm:'12px',md:'12px',lg:'20px'}} fontWeight={500} color='#E5E5E5'>
                    Respect
                </Typography>
                <Typography lineHeight='20px' fontSize={{xs:'12px',sm:'12px',md:'12px',lg:'14px'}} fontWeight={400} color='#E5E5E5'>
                    We are committed to providing a positive working<br/>
                    environment free of discrimination and harassment in<br/>all
                    of our activities. All of our employees, team are given<br/>equal
                    opportunities for career development.
                </Typography>
            </Box>
        </Box>
        <Box display='flex' flexDirection='column' gap='2rem' paddingY='4rem' paddingX='2rem' sx={{backgroundImage:`url(${cardBg})`}}>
            <Box display='flex' flexDirection='row' gap='1rem' alignItems='center'>
                <img src={medal} alt="" height='50px' width='50px'/>
                <Typography lineHeight='60.94px' fontSize={{xs:'16px',sm:'22px',md:'34px',lg:'40px'}} fontWeight={700} color='#CDA571'>
                    Our Mission
                </Typography>
            </Box>
            <Typography lineHeight='20px' fontSize={{xs:'12px',sm:'12px',md:'12px',lg:'14px'}} fontWeight={400} color='#E5E5E5'>
                We endeavor to enhance awareness and
                understanding<br/>of exchange-enabled trade in
                commodity derivatives. We<br/>will continue to
                minimize the adverse effects of price<br/>volatility
                by providing commodity ecosystem<br/>participants
                with neutral, secure and transparent trade<br/>
                mechanisms and formulating quality parameters
                and<br/>trade regulations in conjunction with the
                regulatory<br/>authority. Moreover, it will continue
                to enforce a zero-<br/>tolerance policy toward
                unethical trade practice<br/>attempted or real by
                any participant/s and investing the<br/>all-round
                development of the commodity ecosystem.
            </Typography>
        </Box>
        
    </Box>
  )
}

export default AboutFifthSection
