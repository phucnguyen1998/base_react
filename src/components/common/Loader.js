import { CircularProgress, styled as MUIStyled } from '@mui/material'
// import Logo from './Logo'
import logo from '../../logo.svg';

const Loader = MUIStyled(({ className, includedLogo }) => {
  if (!includedLogo) return
  return (
    <div className={className}>
      {includedLogo && (
        <div className="loader">
          {/* <Logo /> */}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
      {!includedLogo && <CircularProgress />}
    </div>
  )
})(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .loader': {
    animation: 'spinloader 2s linear infinite',
    borderTop: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
      animation: 'spinlogo 2s linear infinite',
    },
  },

  '@keyframes spinloader': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes spinlogo': {
    '0%': {
      transform: 'rotate(360deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
}))

export default Loader
