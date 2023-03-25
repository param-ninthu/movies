import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { addErrorIntoField } from "../../utils";
import ErrorMessage from "./ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors, type }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            type={type}
            {...field}
            {...addErrorIntoField(errors[name])}
            required
            inputProps={inputProps}
            label={label}
            variant="filled"
            size="small"
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default TextFields;
