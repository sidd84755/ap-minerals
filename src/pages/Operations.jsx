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
      <Box zIndex={100} paddingX={{xs:'25px', sm:'30px',md:'250px'}} sx={{transform:'translate(0 ,-70px)'}}>
        <OperationsFifthSection/>
      </Box>
      <Box sx={{backgroundImage: `url(${operationsseventhBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}} >
        <OperationsSixthSection/>
      </Box>
      <Footer/>
    </>
  )
}

export default Operations
