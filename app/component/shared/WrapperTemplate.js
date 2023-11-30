import { Box, Typography } from '@mui/material'
import React from 'react'
import { roboto_mono ,poppins_mono} from './../style/Fonts'

const WrapperTemplate = ({head,children}) => {
    return (
        <Box sx={{my:'100px'}}>
           <Typography className={poppins_mono.className} align='center' variant='h4' marginBottom={'40px'} > {head}</Typography>
           {children}
            
        </Box>
    )
}

export default WrapperTemplate
