import { Box, Typography } from '@mui/material'
import React from 'react'
import PromptCard from './PromptCard'
const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
    return (
        <Box>
            <Typography>{name} profile</Typography>
            <Typography>{desc}</Typography>
            <Box sx={{mt:5}}>
          {
            data.map((post,index)=>(
                // <h1 key={index}>hhh</h1>
                <PromptCard
                 key={index}
                 post={post}
                handleEdit={()=> handleEdit && handleEdit(post)} 
                handleDelete={()=> handleDelete && handleDelete(post)} 
                />
            ))
          }
        </Box>
        </Box>
    )
}

export default Profile
