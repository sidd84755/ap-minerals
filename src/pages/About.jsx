import React from 'react'
import Navbar from '../aboutcomponents/Navbar'
import AboutHero from '../aboutcomponents/AboutHero'
import AboutSecondSection from '../aboutcomponents/AboutSecondSection'
import AboutThirdSection from '../aboutcomponents/AboutThirdSection'
import AboutFourthSection from '../aboutcomponents/AboutFourthSection'
import AboutFifthSection from '../aboutcomponents/AboutFifthSection'
import AboutSixthSection from '../aboutcomponents/AboutSixthSection'
import SimpleSlider from '../aboutcomponents/AboutSeventhSection'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import { aboutsixthBg } from '../assets'

const About = () => {
  return (
    <Box sx={{overflowX:'hidden'}}>
      <Box position='relative'>
        <Navbar/>
        <AboutHero/>
      </Box>
      <Box paddingX={{xs:'25px', sm:'30px',md:'190px'}}>
        <AboutSecondSection/>
      </Box>
      <AboutThirdSection/>
      <Box paddingX={{xs:'25px', sm:'30px',md:'190px'}}>
        <AboutFourthSection/>
      </Box>
      <Box zIndex={100} paddingX={{xs:'25px', sm:'30px',md:'50px'}} sx={{transform:'translate(0 ,50px)'}}>
        <AboutFifthSection/>
      </Box>
      <Box zIndex={10} sx={{backgroundImage: `url(${aboutsixthBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}} >
        <AboutSixthSection/>
      </Box>
      <SimpleSlider/>
      <Footer/>
    </Box>
  )
}

export default About
