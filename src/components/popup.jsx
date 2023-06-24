import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import classes from './Home.module.css'
import { Box } from '@mui/material';
import { popupbg } from '../assets';
import apmineral from '../assets/apmineral.pdf'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs1() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <Box>
      <Button onClick={handleClickOpen} startIcon={<SaveAltIcon/>} variant="contained" style={{borderRadius:0,padding:'10px 40px',color:'#fff',backgroundColor:'transparent',textTransform:'capitalize', fontSize:'18px'}}>AP Minerals</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <Box sx={{backgroundImage:`url(${popupbg})`}}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          
        </BootstrapDialogTitle>
        <Box p='100px' display='flex' flexDirection='column' alignItems='center'>
            
            <Typography fontSize={{xs:'22px',sm:'22px',md:'22px',lg:'28px',xl:'28px'}} fontWeight={500} textAlign='center' color='#fff'>
                Enter your email id to continue
            </Typography>
            <form action="https://formsubmit.co/info@apmineral.in" method="POST" >
                <Box display='flex' flexDirection='column' alignItems='center'>   
                    <input type="email" name="email" placeholder="Email" className={classes.popup1} required/>
                    <a href={apmineral} download="ApMineral">
                        <Button className={classes.mybutton}  variant="contained" style={{borderRadius:0,padding:'10px 40px',marginTop:'100px',color:'#fff',backgroundColor:'#A17337',textTransform:'capitalize',fontSize:'28px'}}>Download Profile</Button>
                    </a>
                </Box>
            </form>    
        </Box>
        </Box>
      </BootstrapDialog>
    </Box>
  );
}