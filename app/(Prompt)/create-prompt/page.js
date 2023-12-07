'use client'
import React, { useState } from 'react'
import { useRouter,usePathname, useSearchParams  } from 'next/navigation'
import { Box, Container } from '@mui/material'
import Form from './../../../component/common/prompt/Form'
import { useSession } from 'next-auth/react'
const Page = () => {
    const [submiting,setSubmiting]=useState(false)
    const router = useRouter()
    const {data:session} = useSession()
    const [post,setPost]=useState({
        prompt:'',
        tag:''
    })
    const createPrompt = async (e)=>{
      e.preventDefault();
       setSubmiting(true)
       try {
          const response = await fetch('/api/prompt/new',{
            method:'POST',
            body:JSON.stringify({
              prompt:post.prompt,
              userId:session?.user.id,
              tag:post.tag,

            })
          })
            if(response.ok){
              router.push('/prompt')
            }
       } catch (error) {
          console.log(error)
       }finally{
        setSubmiting(false)
       }

    }
    return (
        <Container maxWidth='xl'>
          <Box sx={{textAlign:'center',mt:10}}>
          Promt
          <Form
            type='Create'
            post={post}
            setPost={setPost}
            submiting={submiting}
            handleSubmit={createPrompt}

          />
          </Box>
        </Container>
    )
}

export default Page
