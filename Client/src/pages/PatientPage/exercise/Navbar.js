import React from "react";
import { Stack } from "@mui/material";
// import Logo from "../../../public/assets/images/Logo.png"
import { Link } from "react-router-dom";
import "./navbar.css";
// import { width } from '@mui/system';
const NavbarHome = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }} // sm->small device   xs->extra small device    mt-> margin top
      px="20px" // px -> padding x axis
    >
      <Link to="/">
        <img className="imgLogo" src="./assets/images/Logo.png" alt="logo" />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className="Home">
          Home
        </Link>
        <a href="#exercise" className="ExerciseLink">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavbarHome;
