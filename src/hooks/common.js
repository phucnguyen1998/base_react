import { useMediaQuery, useTheme } from '@mui/material'
import { shallowEqual, useSelector } from 'react-redux'

export const useMobileCheck = () => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('lg'))
}

export const useLoggedInCheck = () => {
  const authStore = useSelector((store) => store, shallowEqual).auth

  return authStore?.user?.id !== undefined
}
