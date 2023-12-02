'use client'
import { Box ,Container} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import * as IMG from './../Asset/images/images'
import {data} from './../common/data'
import FooterEmail from './FooterEmail'
import AnchorButton from './AnchorButton'
import Link from 'next/link'


const Footer = () => {
    const {footData} = data[2]
    
    return (
        <Container maxWidth="xl" sx={{display:{xs:'column',sm:'flex'},
        justifyContent:{xs:'center',sm:'space-between'},
        py:1,alignItems:'center',
        alignContent:'center'
    }}>
             <Box sx={{display:'flex',justifyContent: 'center'}}>
             <Link href='/'>
             <Image src={IMG.LogoWhite} height={70} width={70}  alt=''/>
             </Link>
              </Box>
              <FooterEmail/>
              <Box sx={{display:'flex',justifyContent: 'center'}}>
              {footData.map((data, index) => (
                <AnchorButton url={data.path} label={data.icon} key={index} target={data.path.startsWith('htpp')?'_blank':''} rel='noreferrer'/>
              ))}
              </Box>
            
        </Container>
    )
}

export default Footer
