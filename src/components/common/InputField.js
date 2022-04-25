import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, styled as MUIStyled, TextField } from '@mui/material'
import { useState } from 'react'

const InputField = MUIStyled((props) => {
  const [showedPassword, setShowedPassword] = useState(false)
  const { InputProps: orgInputProps, type, ...others } = props
  let InputProps = orgInputProps

  const handleTogglePassword = () => {
    setShowedPassword(!showedPassword)
  }

  if (type === 'password') {
    InputProps = {
      ...InputProps,
      endAdornment: (
        <IconButton onClick={handleTogglePassword}>{showedPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
      ),
    }
  }
  return <TextField {...others} InputProps={InputProps} type={type === 'password' && showedPassword ? 'text' : type} />
})({
  '& .MuiInputBase-root': {
    fontSize: '16px',
    lineHeight: 1.5,
  },

  '& input': {
    padding: '10px 16px',
    height: 'auto',
  },
})

export default InputField
