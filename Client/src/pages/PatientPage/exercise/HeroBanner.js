import React from 'react'
import {Stack,Box,Typography,Button}from "@mui/material"
import "./exercise.css"

const HeroBanner = () => {
  return (
    
      <Box  sx={{
          mt: { lg: "212px", xs: "70px" },           // MARGIN TOP
          ml: { sm: "50px" }                                // Margin left
                            
      }} position="relative" p="20px">                 {/* PADDING -> P */ }
          <Typography color="#FF2625" fontWeight="600" fontSize="26px">
              FitnessClub
          </Typography>
          <Typography fontWeight="700"
              sx={{ fontSize: { lg: "44px", xs: "40px" } }}
              mb="23px" mt="30px"
          >
          Sweat,Smile <br/> And Repeat
          </Typography>
          <Typography fontSize="22px" lineHeight="35px"
          mb="4px">
          Check out most Effective Exercises
          </Typography>
          <Button
              variant="contained"
              href='#exercises'
              color="error"
              sx={{background:"#ff2526" , padding:"10px"}}
          >Explore Exercises</Button>
          <Typography
              fontWeight={600}
              color="#FF2625"
              sx={{
                  opacity: .1,
                  display: {
                      lg: "block",
                      xs:"none"
                  }
              }}
              fontSize="200px"
          >
              Exercise
          </Typography>
          <img src="./assets/images/banner.png" alt="banner" className='hero-banner-img'/>
          </Box>
  )
}

export default HeroBanner
