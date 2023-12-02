"use client";
import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ServiceCard } from "../../style/style";
import ReactSlickContainer from "../../shared/ReactSlickContainer";
import WrapperTemplate from "@/component/shared/WrapperTemplate";
import { data } from "../data";

const Service = () => {
  const { serviceData } = data[4];
  return (
    <WrapperTemplate head={serviceData[0].head}>
      <Stack>
        <ReactSlickContainer>
          {serviceData[0].serviceDetails.map((data, index) => (
            <ServiceCard elevation={3} key={index}>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <Typography component="h3" variant="h5" gutterBottom>
              {data.title}
            </Typography>
            <Image src={data.serviceImg} alt="" width={100} height={100} />
            <>
              <ul style={{ padding: "0" }}>
                {data.expert.map((data, index) => (
                  <li
                    style={{ listStyle: "none", padding: "5px 0" }}
                    key={index}
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </>
              </Box>
            </ServiceCard>
          ))}
        </ReactSlickContainer>
      </Stack>
    </WrapperTemplate>
  );
};

export default Service;
