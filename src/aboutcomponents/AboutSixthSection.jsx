import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import classes from './About.module.css'

const AboutSixthSection = () => {
  return (
    <Box paddingY={{xs:'100px', sm:'100px',md:'150px'}} paddingX={{xs:'25px', sm:'30px',md:'190px'}} display='flex' flexDirection='column' alignItems='flex-start' gap='3rem'>
        <Box>
          <Typography lineHeight={{xs:'49px',sm:'49px',md:'56px'}} fontSize={{xs:'42px',sm:'42px',md:'42px',lg:'48px'}} fontWeight={700} color='#fff'>
            Environment and<br/>
            The Community
          </Typography>
        </Box>
        <Box  display='flex' flexDirection='column' gap='1rem'>
          <Typography lineHeight={{xs:'23px',sm:'23px',md:'32.5px'}} fontSize={{xs:'20px',sm:'20px',md:'20px',lg:'28px'}} fontWeight={600} color='#fff'>
            Social Responsibility
          </Typography>
          <Typography paddingRight={{xs:'25px', sm:'30px',md:'300px'}} lineHeight='20px' fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}} fontWeight={400} color='#fff'>
            We are actively engaged in the local
            communities in the areas in which we operate
            by some other things, by supporting and
            contributing to education and infrastructure
            and by prioritizing the local population when
            employing staff.
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap='1rem'>
          <Typography lineHeight={{xs:'23px',sm:'23px',md:'32.5px'}} fontSize={{xs:'20px',sm:'20px',md:'20px',lg:'28px'}} fontWeight={600} color='#fff'>
            Responsible Exploration and Mining
          </Typography>
          <Typography paddingRight={{xs:'25px', sm:'30px',md:'300px'}} lineHeight='20px' fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}} fontWeight={400} color='#fff'>
            Environmental responsibility is a central
            issue in a company with operations
            involving environmental risks. The major of
            the company’s activities are carried out in
            areas which are sensitive to the impact of
            mining operations. Our group understands
            that there are people living close to our
            operations and therefore seeks to minimize
            the negative impact of our operations on
            the environment by focusing on adopting
            innovative technologies, continuously
            optimizing resources utilization and
            decreasing waste.
          </Typography>
        </Box>
    </Box>
  )
}

export default AboutSixthSection
