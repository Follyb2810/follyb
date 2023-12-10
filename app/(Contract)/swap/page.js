import React from 'react'
import { Box, Typography } from '@mui/material';

const page = () => {
    return (
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Coming Soon
      </Typography>
      <Typography variant="subtitle1">
        We&apos;re working hard to bring you something amazing!
      </Typography>
    </Box>

    )
}

export default page
