'use client'
import { Box } from '@mui/material'
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
        const handleTagClick =(tagName)=>{
            setsearchText(tagName)
            const searchResult = filterPrompts(tagName)
            setsearchResults(tagName)
        }
    }
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch('/api/prompt')
            const data = await response.json()
            setposts(data)
        }
        fetchPost()
    },[])

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
             <input type='text' 
             placeholder='search for tag or username'
             value={searchText}
             onChange={handleSearchChange}
             required
             style={{width:'100%'}}
             />
            </form>
            <PromptCardList
             data={posts}
             hanleTagClick={()=>{}}
            />
        </Box>
    )
}

export default Feed


const PromptCardList =({data,hanleTagClick})=>{
    return(
        <Box sx={{mt:5}}>
          {
            data.map((post,index)=>(
                <PromptCard
                 key={post._id}
                 post={post}
                 hanleTagClick={hanleTagClick}
                />
            ))
          }
        </Box>
    )
}
