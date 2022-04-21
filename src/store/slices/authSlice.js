import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  accessToken: '',
  refreshToken: '',
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    loginSuccess: (state, action) => {
      const { user, tokens } = action.payload
      return {
        ...state,
        accessToken: tokens.accessToken.token,
        refreshToken: tokens.refreshToken.token,
        user,
      }
    },

    logout: () => {
      return initialState
    },
  },
})

export const { actions: authActions, reducer: authReducer } = authSlice
