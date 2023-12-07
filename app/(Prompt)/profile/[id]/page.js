'use client'
import Profile from '@/component/common/prompt/Profile'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {
    const searchParams= useSearchParams()
    const userName = searchParams.get('name')
    const [userPost, setuserPost] = useState([])
    useEffect(()=>{
        const fetchPost = async ()=>{
            const response = await fetch(`api/user/${params?.id}/post`)
            const data = await response.json()
            setuserPost(data)
        }
        if(params?.id) fetchPost()
    })
  return (
    <Profile
    name={userName}
    desc={`welcome to ${userName}'s personalize profilr page.
      explore ${userName} exceptional prompts ad be inspired by the power of ther imagination
    `}
    data={userPost}
    />
  )
}

export default Page