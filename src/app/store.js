import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Redux/CounterSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})


export default store 