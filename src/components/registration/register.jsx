import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./_register.css";

import bg from "./../../assets/bg/bg.jpg";
import { Box, Container, Button } from "@mui/material";
import TextFields from "./TextField";
import CheckBoxFields from "./CheckBoxFields";

const schema = yup.object({
  name: yup.string().required("Name is required"),
});

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
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
            name="email"
            label="Email"
          />
          <TextFields
            errors={errors}
            control={control}
            name="password"
            label="Password"
          />
          <TextFields
            errors={errors}
            control={control}
            name="cpassword"
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
