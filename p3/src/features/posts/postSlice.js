import {createSlice} from '@reduxjs/toolkit'


const initialState=[
    {id:1,title:'learning redux',content:'i find something'},
    {id:2,title:'learning slice',content:'problem the post office or something'},
]

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
           reducer(state,action){
                state.push(action.payload)
          },
        }
    }
})

export const selectAllPosts=(state)=>state.posts;
export const {postAdded}=postSlice.actions

export default postSlice.reducer;