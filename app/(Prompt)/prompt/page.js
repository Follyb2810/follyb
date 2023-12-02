import { Hero } from '@/component/common/Home'
import { Feed } from '@/component/common/prompt'
import PromptHero from '@/component/common/prompt/PromptHero'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Container maxWidth='xl'>
    <PromptHero/>
    <Feed/>
        
    </Container>
  )
}

export default page
