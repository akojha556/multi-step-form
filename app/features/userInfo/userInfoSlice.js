import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  email: "",
  phoneNumber: ""
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setEmail, setPhoneNumber } = userInfoSlice.actions;

export default userInfoSlice.reducer;