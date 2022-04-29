import { WarningOutlined } from '@mui/icons-material'
import { Alert, styled as MUIStyled } from '@mui/material'

const ErrorMessage = MUIStyled(({ message, ...other }) => {
  return <Alert {...other} severity="warning" icon={<WarningOutlined />}></Alert>
})(({ theme }) => ({
  backgroundColor: '#FF424F',
  color: '#fff',
  fontSize: 16,
  lineHeight: '20px',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 24,

  '& .MuiAlert-icon': {
    padding: 0,
  },

  '& svg': {
    color: '#fff',
  },

  '& .MuiAlert-message': {
    padding: 0,
    fontSize: 16,
    lineHeight: '20px',
  },
}))

export default ErrorMessage
