import React from 'react'
import WrapperTemplate from '../../shared/WrapperTemplate'
import { data } from '../data'
import { Card, CardActions, CardContent, CardMedia, Typography,Button, Grid } from '@mui/material'
import AnchorButton from '../../shared/AnchorButton'
import Image from 'next/image'
import StyleModules from './../../style/page.module.css'

const Project = () => {
    const {projectData} = data[5]

    const callToAction ={

    }
    return (
        <WrapperTemplate head={projectData[0].head}>
          <Grid container spacing={2}>
            {
              projectData[0].projecDetails.map((data,index)=>(
                <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                <Image src={data.projectImg} alt='' height={0} width={0} style={{width:'100%',height:'250px',objectFit:'cover'}}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                    <AnchorButton btnStyle={StyleModules.btnStyle} label='view' url={data.path} target={data.path.startsWith('http') ? '_blank': ''}/>
                </CardActions>
              </Card>
                  </Grid>
              ))
            }
          </Grid>
        </WrapperTemplate>
    )
}

export default Project
