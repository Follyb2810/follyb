'use client'
import { Box, Grid, TextField } from '@mui/material'
import React,{useEffect, useState} from 'react'
import PromptCard from './PromptCard'

const Feed = () => {
    const [searchText, setsearchText] = useState('')
    const [posts, setposts] = useState([])
    const [searchTimout, setsearchTimout] = useState(null)
    const [searchResults, setsearchResults] = useState([])
    const handleSearchChange=(e)=>{
        e.preventDefault();
        clearTimeout(searchTimout)
        setsearchText(e.target.value)
        setsearchTimout(
            setTimeout(()=>{
                const searchReslt = filterPrompts(e.target.value)
                setsearchResults(searchReslt)
            },500)
        )
        
    }
    const handleTagClick =(tagName)=>{
        setsearchText(tagName)
        const searchResult = filterPrompts(tagName)
        setsearchResults(searchResult)
    }
    
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch('/api/prompt')
            const data = await response.json()
            setposts(data)

        }
        fetchPost()
    },[])
    // {posts.map(a=>console.log(a.creator))}

    const filterPrompts = (searchtext)=>{
        const regex = new RegExp(searchtext,'i')
        return posts.filter((item)=>
                                regex.test(item.creator.username) ||
                                regex.test(item.tag) ||
                                regex.test(item.prompt)
    )}
    
    
    return (
        <Box>
        <form>
         <TextField 
         type='text' 
         placeholder='search for tag or username'
         value={searchText}
         onChange={handleSearchChange}
         required
         variant="outlined"
         fullWidth
         sx={{marginBottom: 2}}
         />
        </form>
        <PromptCardList
         data={posts}
         handleTagClick={handleTagClick}
        />
    </Box>
    )
}

export default Feed


const PromptCardList =({data,handleTagClick})=>{
    
    return(
        <Grid container spacing={3}>
        {
          data.map((post,index)=>(
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <PromptCard
                 key={post._id}
                 post={post}
                 handleTagClick={handleTagClick}
                />
             </Grid>
          ))
        }
      </Grid>
    )
}
