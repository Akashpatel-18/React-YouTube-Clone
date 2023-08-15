import { createSlice } from '@reduxjs/toolkit'


const inputSlice = createSlice({
    name : 'input',
    initialState : "HouseMusicHd",
    reducers : {
        getInput(state, action){
            return state = action.payload
        }
    }
})

export const {getInput} = inputSlice.actions;
export default inputSlice.reducer;




