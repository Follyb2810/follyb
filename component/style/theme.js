import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#edf2ff",
    },
    info: {
      main: "#695439",
    },
    customFirst: {
      main: '#ADD8E6',
      light: '#000',
      dark: '#333',
      contrastText: '#242105',
    },
    customSecond: {
      main: '#000080',
      light: '#F0F0F0',
      dark: '#333',
      contrastText: '#242105',
    },
  },
  typography: {
    fontFamily1: "Your_First_Font, sans-serif",
    fontFamily2: "Your_Second_Font, sans-serif",
  },
});

export default theme;
