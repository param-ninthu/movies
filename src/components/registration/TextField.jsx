import { FormControl, TextField } from "@mui/material";
import React from "react";

const TextFields = ({ label, inputProps }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <TextField
        required
        inputProps={inputProps}
        label={label}
        variant="filled"
      />
    </FormControl>
  );
};

export default TextFields;
