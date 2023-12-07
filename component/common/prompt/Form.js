import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Form = ({type,post,setPost,submiting,handleSubmit}) => {
    return (
        <Box>
         <Typography>
            <span>{type} Post</span>
         </Typography>
         <Typography>{type} and share amazing prompt with the world,and let your margination run wild with any AI Platform</Typography>
        <form onSubmit={handleSubmit} style={{marginTop:10,display:'flex',flexDirection:'column'}}>
         <label>Your Ai Prompt</label>
         <textarea
            value={post.prompt}
            onChange={(e)=>setPost({...post,prompt:e.target.value})}
            placeholder='write your post here'
            required
         />
         <label>Tag (#product,#development,#idesa)</label>
         <input
            value={post.tag}
            onChange={(e)=>setPost({...post,tag:e.target.value})}
            placeholder='#tag'
            required
         />
         <Box sx={{display:'flex',justifyContent:"end",gap:5,mt:2,mx:5}}>
           <Link href='/' style={{backgroundColor:'red'}}>Cancel</Link>
           <button  style={{padding:'10px'}} type='submit' disabled={submiting}> {submiting ? `${type}...`:type}</button>
         </Box>
        </form>
            
        </Box>
    )
}

export default Form
