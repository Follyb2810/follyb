'use client'
import { AppBar, Box, Button, Container, Paper, Toolbar } from "@mui/material"
import Link from "next/link"
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import { useState,useEffect } from "react"
import Image from "next/image"
import * as IMG from './../../Asset/images/images'
const PromptNav = () => {
  const [isUserLogin,setUserLogin]=useState(true)
   const [provider,setProvider]=useState(null)
   const {data:session,status} =useSession()
   const [toggleDropdown,setToggleDropdown]=useState(false)
   useEffect(()=>{
    const setUpProviders = async ()=>{
      const response = await getProviders()
      setProvider(response)
    }
    setUpProviders()
   },[])
    return (
        <Container maxWidth='xl'>
        <AppBar position="fixed">
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Link href='/'>
          <Image src={IMG.Logo} alt='folly'  width={50} height={50} />
          </Link>
          <Box sx={{display:{xs:'none',sm:'flex'}}}>
          {
            session?.user ? (
              <Box sx={{display:'flex',gap:3,alignItems:'center'}}>
                <Link href='/create-prompt'>Create Post</Link>
                <Button variant="outlined" color="secondary" onClick={signOut}>sign Out</Button>
                <Link href='/profile'>
                <Image src={session?.user.image} alt='folly'  width={30} height={30} />
                </Link>
                </Box>
            ):(<>
                  {
                    provider && Object.values(provider).map((provider)=>(
                      <Button
                        key={provider.id}
                        variant="secondary"
                        onClick={()=>signIn(provider.id)}
                      >Sign in</Button>
                    ))
                  }
              </>)
          }
          </Box>
          <Box sx={{display:{xs:'flex',sm:'none',position:'relative'}}}>
          {
            session?.user ? (
              <Box sx={{display:'flex',gap:3,alignItems:'center'}}>
                <Image src={session?.user.image} alt='folly'  
                width={30} height={30}
                onClick={()=>setToggleDropdown(prev =>!prev)}
                />
                {toggleDropdown && (
                  <Paper elevation={24} sx={{position:'absolute',top:'30px',right:'10px',width:'200px',display:'flex',flexDirection:'column',gap:'5px',p:'10px'}}>
                    <Link href='/profile' onClick={()=>setToggleDropdown(false)}> My Profile</Link>
                    <Link href='/create-prompt' onClick={()=>setToggleDropdown(false)}>Create Prompt</Link>
                    <Button 
                    variant="contained"
                    color="warning"
                     sx={{mt:1}}
                    onClick={()=>{
                      setToggleDropdown(false)
                      signOut()
                    }}>Sign Out</Button>
                    </Paper>
                )}
                </Box>
            ):(<>
                  {
                    provider && Object.values(provider).map((provider)=>(
                      <Button
                        variant="secondary"
                        key={provider.id}
                        onClick={()=>signIn(provider.id)}
                      >Sign in</Button>
                    ))
                  }
              </>)
          }
          </Box>
        </Toolbar>
      </AppBar>
        </Container>
    )
}

export default PromptNav
