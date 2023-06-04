import React from 'react'
import { Box, Typography } from '@mui/material'
import { operationsbgvideo } from '../assets'
import classes from './Operations.module.css'

const OperationsThirdSection = () => {
  return (
    <>
      <Box width='100%' height='30rem'
      > 
        <video className={classes.videoplayer} src={operationsbgvideo} autoPlay loop muted/>
      </Box>
    </>
  )
}

export default OperationsThirdSection