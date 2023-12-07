'use client'
import React, { useEffect, useState } from 'react'
import { useRouter,usePathname, useSearchParams  } from 'next/navigation'
import { Box, Container } from '@mui/material'
import { Form } from '@/component/common/prompt'


const EditPrompt = () => {
    const [submiting,setSubmiting]=useState(false)
    const router = useRouter()

    const [post,setPost]=useState({
        prompt:'',
        tag:''
    })
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')
    useEffect(()=>{
        const getPromptDetails = async ()=>{
            const response = await fetch(`api/prompt/${promptId}`)
            const data = await response.json()
            setPost({
                prompt:data.prompt,
                tag:data.tag
            })
        }

        if(promptId) getPromptDetails()

    },[promptId])
    const updatePrompt = async (e)=>{
      e.preventDefault();
       setSubmiting(true)
       if(!promptId) return alert('prompt id not found')
       try {
          const response = await fetch(`/api/prompt/new/${promptId}`,{
            method:'PATCH',
            body:JSON.stringify({
              prompt:post.prompt,
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
      <Box sx={{textAlign:'center',mt:10}}
           role='region' 
           aria-label='Prompt creation form'>
      Promt
      <Form
        aria-label='Create a new prompt'
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
      </Box>
    </Container>
    )
}

export default EditPrompt
