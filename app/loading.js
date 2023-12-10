import { Box, CircularProgress } from '@mui/material';
import * as React from 'react';


 function PageLoader() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress size="lg" />
    </Box>
  );
}


export default PageLoader


