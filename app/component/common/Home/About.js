'use client'
import React from 'react'
import WrapperTemplate from '../../shared/WrapperTemplate'
import { data } from '../data' 
import { Box, Typography } from '@mui/material'
import AnchorButton from '../../shared/AnchorButton'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import file from '/Babatunde_Yusuf_Folorunsho.pdf'

const About = () => {
    const {AboutData} = data[3]
    const notify = (msg) => toast(msg);
   
    return (
        <WrapperTemplate head={AboutData[0].head}>
        <ToastContainer />
        <Box>
          <Typography>{AboutData[0].aboutme}</Typography>
          <AnchorButton
                label="Download My Cv"
                url={AboutData[0].path}
                target=""
                onClick={() => notify('Thanks for Downloading My Cv')}
                download="BABATUNDE_YUSUF_FOLORUNSHO.pdf"
                styles={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  padding: '10px 20px',
                  margin: '5px',
                  color: 'white',
                  border: '2px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: 'blue',
                  display: 'inline-block',
                  transition: 'background-color 0.3s ease',
                }}
              />

        
        </Box>

        </WrapperTemplate>
    )
}

export default About

// import React from 'react';
// import WrapperTemplate from '../../shared/WrapperTemplate';
// import { data } from '../data';
// import { Box, Typography } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const About = () => {
//   const { AboutData } = data[3];
//   const notify = (msg) => toast(msg);

//   return (
//     <WrapperTemplate head={AboutData[0].head}>
//       <ToastContainer />
//       <Box>
//         <Typography>{AboutData[0].aboutme}</Typography>
//         <button onClick={() => notify('Thanks for Downloading My Cv')}>
//           Download My Cv
//         </button>
//       </Box>
//     </WrapperTemplate>
//   );
// };

// export default About;

