import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     name: true,
     email: true,
     phoneNumber: true
}

const inputStatusSlice = createSlice({
     name: "inputStatus",
     initialState,
     reducers: {
          setNameStatus: (state, action) => {
               state.name = action.payload
          },
          setEmailStatus: (state, action) => {
               state.email = action.payload
          },
          setPhoneNumberStatus: (state, action) => {
               state.phoneNumber = action.payload
          },
     },
})

export const {setNameStatus, setEmailStatus, setPhoneNumberStatus} = inputStatusSlice.actions;

export default inputStatusSlice.reducer;