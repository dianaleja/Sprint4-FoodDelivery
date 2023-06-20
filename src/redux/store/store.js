import { configureStore } from "@reduxjs/toolkit";


const reducer = {
 
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
 
});
export default store;
