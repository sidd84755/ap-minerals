import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'
import HomeSecondSection from '../components/HomeSecondSection'
import HomeThirdSection from '../components/HomeThirdSection'
import HomeFourthSection from '../components/HomeFourthSection'
import HomeFifthSection from '../components/HomeFifthSection'
import Footer from '../components/Footer'
import { Box, Typography } from '@mui/material'
import { homethirdBg, homefifthBg } from '../assets'

const Home = () => {
  return (
    <>
    <Box position='relative'>
      <Navbar/>
      <HomeHero/>
    </Box>
    <Box >
      <Box paddingX={{xs:'25px', sm:'30px',md:'190px'}}>
        <HomeSecondSection/>
      </Box>
      <Box paddingX={{xs:'25px', sm:'30px',md:'200px'}} sx={{backgroundImage: `url(${homethirdBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        <HomeThirdSection/>
      </Box>
      <HomeFourthSection/>
      <Box sx={{backgroundImage: `url(${homefifthBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        
          <HomeFifthSection/>
        
      </Box>
      <Footer/>
    </Box>
    </>
  )
}

export default Home
