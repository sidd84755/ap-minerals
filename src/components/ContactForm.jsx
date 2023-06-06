import React from 'react'
import { Box, Grid, TextField, Button } from '@mui/material'
import classes from './Home.module.css'

const ContactForm = () => {
    
  return (
    <>
    <Box className={classes.contact}>
      <Box className={classes.row}>
        <form action="https://formsubmit.co/info@apmineral.in" method="POST" >
          <Box display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} gap='1.5rem' justifyContent='space-between'>   
            <input type="text" name="name" placeholder="Name" className={classes.box} required/>
            <input type="email" name="email" placeholder="Email" className={classes.box} required/>
          </Box>
          <Box display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}}>
            <input type="number" name="number" placeholder="Number" className={classes.box2} required min="10" max="10"/>
          </Box>
          <Box>
                       
            <textarea name="message" placeholder="Anything else we should know?*" id="" cols="30" rows="5"></textarea>
            <Button className={classes.mybuttonthird} type='submit' variant="outlined" style={{borderRadius:0,marginTop:'0.8rem',color:'#fff',padding:'10px 60px',borderColor:'#A17337',textTransform:'capitalize',fontSize:'28px'}}>Submit</Button>
          </Box>     
        </form>
      </Box>
    </Box>
    </>
  )
}

export default ContactForm
