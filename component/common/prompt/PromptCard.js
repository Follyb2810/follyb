'use client'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import React,{useState} from 'react'
import Image from 'next/image'
import {usePathname,useRouter} from 'next/navigation'
import { ContentCopy, Done } from '@mui/icons-material'
const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}) => {
    const {data:session}= useSession()
    const pathName=usePathname()
    const router = useRouter()
    const [copied, setcopied] = useState('')
    const handleCopy=()=>{
        setcopied(post.prompt)
        navigator.clipboard.writeText(post.prompt)
        setTimeout(()=>setcopied(''),3000)
    }

    return (
        <Box>
        <Card >
        <Image src={post?.creator?.image} alt='' sx={{borderRadius: '50%',height: '40px',width: '40px'}} height={40} width={40} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">{post.creator?.email}</Typography>
        </CardContent>
        
         <Typography>{post.prompt}</Typography>
         <Typography onClick={()=>{handleTagClick && handleTagClick(post.tag)}}>{post?.tag}</Typography>
        <Box onClick={handleCopy}>
        {
            copied ? <Done size={20} color='primary'/> :<ContentCopy size={20} color='primary'/>
        }
        </Box>
          {
            session?.user._id === post._id && pathName === '/profile' && (
              <Box sx={{mt:3,display:'flex',justifyContent:'center',border:'2px solid red'}}>
                <Typography onClick={handleEdit} sx={{cursor:'pointer'}}>Edit</Typography>
                <Typography onClick={handleDelete} sx={{cursor:'pointer'}}>Delete</Typography>
              </Box>
            )
          }
      </Card>
        </Box>
    )
}

export default PromptCard
