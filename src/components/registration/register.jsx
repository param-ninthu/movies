import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./_register.css";

import bg from "./../../assets/bg/bg.jpg";
import { Box, Container } from "@mui/material";
import TextFields from "./TextField";
import CheckBoxField from "./CheckBoxField";

const Register = () => {
  return (
    <Box
      sx={{
        minheight: "100% !important",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${bg})`,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "4rem",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <h1 className="black-text">Create Account</h1>

        <Box component="form" sx={{ width: "100%", mt: "2rem" }}>
          <TextFields label="Name" />
          <TextFields label="Email" />
          <TextFields label="Password" />
          <TextFields label="Confirm Password" />
          <CheckBoxField />
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
