import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      incremented: (state) => {
        state.value += 1
      },
      decremented: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    }
  })
  
  export const { incremented, decremented, incrementByAmount } = counterSlice.actions
  export default counterSlice.reducer