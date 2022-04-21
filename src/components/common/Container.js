import { styled as MUIStyled, Container as MUIContainer } from '@mui/material'

const Container = MUIStyled((props) => {
  return <MUIContainer {...props} maxWidth="xl" />
})({})

export default Container
