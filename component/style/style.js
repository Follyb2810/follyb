import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Box, Button, Paper, TextField } from '@mui/material';

const styles = (theme) => ({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        backgroundColor: theme.palette.secondary.main,
      },
      [theme.breakpoints.up('md')]: {
        backgroundColor: theme.palette.primary.main,
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: green[500],
      },
    },
  });

  const FooterEmailBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    border: '1px solid blue',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }));
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

const ServiceCard=styled(Paper)(({theme})=>({
  // display:'flex',
  // flexDirection:'column',
  // justifyContent:'center',
  // alignItems:'center',
  height:'400px',
  padding:'10px 15px',
  margin:'0 10px',
  // width:'100%',
  [theme.breakpoints.down('sm')]:{
    height:'450px',
  },
  [theme.breakpoints.up('sm')]:{
    height:'470px',
  },
  [theme.breakpoints.down('md')]:{
    // height:'450px',
  },
  [theme.breakpoints.up('md')]:{
    // height:'550px',
  },
  [theme.breakpoints.up('lg')]:{
    height:'400px',
  },
  
  
  
}))
  export {
    FooterEmailBox,ServiceCard
  }