import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./_register.css";

import bg from "./../../assets/bg/bg.jpg";
import { Box, Container, Button } from "@mui/material";
import TextFields from "./TextField";
import CheckBoxFields from "./CheckBoxFields";
import { pawdRegExp, usernameRegExp } from "../../utils";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  username: yup
    .string()
    .required("Username is required")
    .matches(
      usernameRegExp,
      "Must contain only letters, numbers and underscore"
    ),
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must contain 8 characters , one uppercase , one lowercase , one number and one special case character"
    ),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const Register = () => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
        <h1 className="black-text mt-2">Create Account</h1>

        <Box
          onClick={handleSubmit(onSubmit)}
          component="form"
          noValidate
          sx={{
            width: "80%",
            mt: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextFields
            errors={errors}
            control={control}
            name="name"
            label="Name"
          />
          <TextFields
            errors={errors}
            control={control}
            name="username"
            label="Username"
          />
          <TextFields
            errors={errors}
            control={control}
            name="email"
            label="Email"
          />
          <TextFields
            errors={errors}
            control={control}
            type="password"
            name="password"
            label="Password"
          />
          <TextFields
            errors={errors}
            control={control}
            name="cpassword"
            type="password"
            label="Confirm Password"
          />
          {/* <CheckBoxFields control={control} name="privacy" /> */}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            {" "}
            SignUp{" "}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
