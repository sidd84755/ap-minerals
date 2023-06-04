import React from 'react'
import Navbar from '../aboutcomponents/Navbar'
import ContactHero from '../contactcomponents/ContactHero'
import ContactSecondSection from '../contactcomponents/ContactSecondComponent'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import { homefifthBg } from '../assets'

const Contact = () => {
  return (
    <>
      <Box position='relative'>
        <Navbar/>
        <ContactHero/>
      </Box>
      <Box sx={{backgroundImage: `url(${homefifthBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <ContactSecondSection/>
      </Box>
      <Footer/>
    </>
  )
}

export default Contact