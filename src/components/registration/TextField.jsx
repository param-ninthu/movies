import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { addErrorIntoField } from "../../utils";

const TextFields = ({ label, inputProps, control, name, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
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
    </FormControl>
  );
};

export default TextFields;
