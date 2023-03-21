import React from 'react'
import { Stack, Typography } from "@mui/material";

import './exercise.css'
const BodyPart = ({ item, setBodyPart ,bodypart}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
          sx={{
              borderTop:bodypart === item?  "4px solid #ff2625":'',
              backgroundColor: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "px"
          }}
    >
      <img
        src="./assets/icons/gym.png"
        alt="dumbell"
        styles={{
          width: "40px",
          height: "40px",
        }}
        className="body-part-icon"
      />
      <Typography></Typography>
    </Stack>
  );
};

export default BodyPart
