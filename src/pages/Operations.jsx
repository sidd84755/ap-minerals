import React from 'react'
import Navbar from '../aboutcomponents/Navbar'
import OperationsHero from '../operationscomponents/OperationsHero'
import OperationSecondSection from '../operationscomponents/OperationsSecondComponent'
import OperationsThirdSection from '../operationscomponents/OperationsThirdComponent'
import OperationsForthSection from '../operationscomponents/OperationsForthComponent'
import OperationsFifthSection from '../operationscomponents/OperationsFifthComponent'
import OperationsSixthSection from '../operationscomponents/OperationsSixthComponent'
import Footer from '../components/Footer'
import { operationsseventhBg } from '../assets'
import { Box } from '@mui/material'
import classes from './main.module.css'


const Operations = () => {
  return (
    <>
      <Box position='relative'>
        <Navbar/>
        <OperationsHero/>
      </Box>
      <Box paddingX={{xs:'25px', sm:'30px',md:'190px'}}>
        <OperationSecondSection/>
      </Box>
      <OperationsThirdSection/>
      <OperationsForthSection/>
      <Box className={classes.bg2} zIndex={100} paddingX={{xs:'0', sm:'0',md:'200px',lg:'180px',xl:'250px'}} sx={{transform:'translate(0 ,-70px)'}}>
        <OperationsFifthSection/>
      </Box>
      <Box marginTop={{xs:'2rem',sm:'2rem',md:'0'}} sx={{backgroundImage: `url(${operationsseventhBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}} >
        <OperationsSixthSection/>
      </Box>
      <Footer/>
    </>
  )
}

export default Operations
