
// steps - 
// 1. create store - only one 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. use slices in components 
import bankReducer from './BankSlice';
import pensionerReducer from'./PensionerSlice';
import { configureStore } from "@reduxjs/toolkit";

 
console.log('store');
const store = configureStore(
    {
        reducer: {
            bank: bankReducer,
            pensioner: pensionerReducer
        }
    }
);

export default store;