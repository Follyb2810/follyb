import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#0052cc',
          },
          secondary: {
            main: '#edf2ff',
          },
      info: {
        main: '#695439'
      },
    },
    typography: {
      fontFamily1: 'Your_First_Font, sans-serif',
      fontFamily2: 'Your_Second_Font, sans-serif',
    },
  });


  export default theme