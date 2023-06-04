import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ContactForm from '../components/ContactForm'
import { mainsectionImg } from '../assets'

const ContactSecondSection = () => {
  return (
    <>
      <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} justifyContent='space-around'
        sx={{background:'rgba(0, 0, 0, 0.8)'}}
        
      >
        <Box display='flex' flexDirection='column' gap='2rem'>
            <Box>
                <img src={mainsectionImg} alt="" />
            </Box>
            <Box display='flex' flexDirection='column' gap='1rem'>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'24px'}} fontWeight={600} color='#CDA571' lineHeight='28px'>
                    Office
                </Typography>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'18px'}} fontWeight={400} color='#CDA571' lineHeight='28px'>
                    8 Avenue Business Centre,<br/>
                    A-3-9, Jalan 8/1, 46050 Petaling Jaya,<br/>
                    Selangor, Malaysia.
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='1rem'>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'24px'}} fontWeight={600} color='#CDA571' lineHeight='28px'>
                    Phone
                </Typography>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'18px'}} fontWeight={400} color='#CDA571' lineHeight='28px'>
                    +60 17 620 2105 &nbsp; +91 98931 15454
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='1rem'>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'24px'}} fontWeight={600} color='#CDA571' lineHeight='28px'>
                    E-mail
                </Typography>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'18px'}} fontWeight={400} color='#CDA571' lineHeight='28px'>
                    amit@apmineral.in &nbsp; pramod@apmineral.in
                </Typography>
            </Box>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
            <Typography fontSize={{xs:'12px',sm:'16px',md:'24px'}} fontWeight={400} color='#A17337' fontStyle='italic'>
                Contact Us
            </Typography>
            <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center' gap='1.5rem'>
                <Typography fontSize={{xs:'16px',sm:'22px',md:'52px'}} fontWeight={700} color='#fff' lineHeight='61px'>
                    We’re Looking Forward to<br/>Hearing From You
                </Typography>
                <ContactForm/>
            </Box>
            
        </Box>
      </Box>
    </>
  )
}

export default ContactSecondSection
