import  {createSlice} from '@reduxjs/toolkit';

const initialState = {

    state: {
        isFetching: false,
    },
    user:{
        username: null,
        isAuthenticated:true
},
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
        state.state.isFetching = true;
  }, 
  }  
});

export const {
      setIsFetching,
    } = userSlice.actions;


export default userSlice.reducer;