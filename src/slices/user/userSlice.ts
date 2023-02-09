import { createSlice } from '@reduxjs/toolkit'

import { UserState } from './userSlice.interface'

const initialState: UserState = { currentUser: null }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.user
    }
  }
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer
