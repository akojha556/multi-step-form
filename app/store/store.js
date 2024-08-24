import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../features/userInfo/userInfoSlice";
import inputSliceReducer from "../features/userInfo/inputStatusSlice";

export const store = configureStore({
     reducer: {
          userInfo: userInfoReducer,
          inputStatus: inputSliceReducer,
     },
});