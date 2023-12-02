import React, { useState } from 'react';
// import { Button, Form, InputGroup } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import { FooterEmailBox } from '../style/style';





const FooterEmail = () => {
  const [formdata, setFormData] = useState({
    email: ''
  });

  const { email } = formdata;

  const changeData = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const notify = (mes) => toast(mes);

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };

      const response = await axios.post(
        'https://folly-email-n8te.vercel.app/newsletter',
        { email },
        config
      );

      if (response.status === 200) {
        setFormData({
          email: ''
        });
        notify(response.data.message);
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
        notify('Failed to submit data. Please try again.'); 
      }
    } catch (error) {
      console.error('Error:', error);
      notify(`Error: Enter a valid email`);

      // if (error.response) {
      //   notify(`Error: ${error.response.data.message}`);
      // } else if (error.request) {
      //   notify('No response received from the server. Please try again.');
      // } else {
      //   notify('An unexpected error occurred. Please try again.');
      // }
    }
  };

  return (
    <FooterEmailBox>
      <TextField
        onChange={changeData}
        value={email}
        name="email"
        type='email'
        id="outlined-password-input"
        label="Enter Email"
        autoComplete="current-password"
        fullWidth
      />
      <Button variant="contained" size="small" onClick={submitData} endIcon={<Send/>}></Button>
      
    </FooterEmailBox>
  );
};

export default FooterEmail;