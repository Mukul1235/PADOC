import React, { useState } from 'react'
import AllExercise from './AllExercise.js';
import HeroBanner from './HeroBanner.js';
import NavbarHome from "./Navbar.js";
import SearchExercise from './SearchExercise.js';
import {Box} from "@mui/material"

const Exercise = () => {
  const [bodyPart, setBodyPart] = useState('all');    // set to all initially
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <Box>
        <NavbarHome />
        <HeroBanner />
        <SearchExercise
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <AllExercise
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </div>
  );
}

export default Exercise
