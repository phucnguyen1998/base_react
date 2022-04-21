import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restoring: true,
}

const layoutSlice = createSlice({
  initialState,
  name: 'layout',
  reducers: {
    retoreCompleted: (state) => {
      return { ...state, restoring: false }
    },
    closeAll: (state) => ({ ...state, ...initialState }),
  },
})
export const { actions: layoutActions, reducer: layoutReducer } = layoutSlice
