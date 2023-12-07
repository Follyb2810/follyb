'use client'
import { Box, Container } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Profile from '@/component/common/prompt/Profile'
const MyProfile = () => {
    const {data:session} = useSession()
    console.log(session)
    const router =useRouter()
    const handleEdit =(post)=>{
        router.push(`/update-propmpts?id=${post._id}`)
    }
    const handleDelete = async (post)=>{
       const hasConfirm = confirm('are you sure you want to delete this prompt')
        if(hasConfirm){
            try {
                 await fetch(`api/prompt/${post.id.toString()}`,{
                    method:'DELETE'
                 })
                 const filterPosts = post.filter((p)=>p._id !== post._id)
                 setposts(filterPosts)
            } catch (error) {
                
            }
        }
    }
    const [posts, setposts] = useState([])
    
    useEffect(()=>{
        const fetchPost = async()=>{
            // const response = await fetch('/api/prompt')
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            console.log(response)
            const data = await response.json()
            setposts(data)
            console.log(data)
        }
        if(session?.user.id) fetchPost()
    },[])

    return (
        <Container maxWidth='xl'>
           <Box  sx={{marginTop:10}}></Box>
            hello profile
            <Profile 
              name='my'
              desc='welcome'
              data={posts}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              
            />
        </Container>
    )
}

export default MyProfile
