import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postSlice'


const AddPostForm = () => {

    const dispatch=useDispatch();

const[title,setTitle]=useState('')
const[content,setContent]=useState('')

const onTitleChanged = e => setTitle(e.target.value)
const onContentChanged = e => setContent(e.target.value)

const onSavePostClicked=()=>{
    if(title && content){
        dispatch(
            postAdded({
              id:nanoid(),
              title,
              content
            })
        )
        setTitle('')
        setContent('')
    }
}
  return (
    <section>
        <h2>add new posts</h2>
        <form >

            <label htmlFor="postTitle">post Title</label>
            <input type="text"
             id='postTitle'
             name='postTitle'
             value={title}
             onChange={onTitleChanged}
            />

            <label htmlFor="postContent">post Content</label>
            <textarea
             id='postContent'
             name='postContent'
             value={content}
             onChange={onContentChanged}
            />
            <button 
              onClick={onSavePostClicked}
            type='button'>save post</button>
        </form>
    </section>
  )
}

export default AddPostForm