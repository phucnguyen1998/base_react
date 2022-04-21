import { createTheme } from '@mui/material'

const APP_THEME = createTheme({
  palette: {
    background: {
      default: '#E5E5E5',
    },
    primary: {
      main: '#292E6F',
      secondBlue: '#0A349E',
      thirdBlue: '#90AFFF',
    },
    text: {
      primary: '#272727',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
})

export default APP_THEME
