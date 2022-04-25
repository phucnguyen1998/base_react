import { Button, styled as MUIStyled } from '@mui/material'

const StyledButton = MUIStyled(({ className, variant, ...other }) => {
  let muiVariant

  switch (variant) {
    case 'form-submit':
    case 'negative':
      muiVariant = 'contained'
      break

    default:
      muiVariant = variant
  }
  return <Button className={[className, variant].join(' ')} variant={muiVariant} {...other} />
})(({ theme }) => ({
  borderRadius: 30,
  padding: '10px 24px',
  fontSize: '16px',
  lineHeight: 1.5,
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 'none',

  '&.form-submit': {
    backgroundColor: theme.palette.primary.secondBlue,
  },
  '&.negative': {
    backgroundColor: '#EBEBF0',
    color: '#272727',
  },
}))

export default StyledButton
