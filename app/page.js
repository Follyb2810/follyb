// app/page.tsx
'use client'
import Container from '@mui/material/Container';
import { About, Faq, Hero, Project, Service } from './component/common/Home'
import {Zoom, Fade,Slide } from 'react-awesome-reveal';



export default function Page() {
  return (
    <Container  maxWidth='xl' style={{overflow:'hidden'}}>
    <Fade direction='right'>
    <Hero/>
    </Fade>
    <Slide direction='left'>
    <About/>
    </Slide>
    <Fade direction='right'>
    <Service/>
    </Fade>
    <Fade direction='left'>
    <Project/>
    </Fade>
    <Zoom direction='up'>
    <Faq/>
    </Zoom>
    </Container>
  );
}
