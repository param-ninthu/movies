import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBoxField = () => {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label="I Accept the term and condtions"
      sx={{ color: "black" }}
    />
  );
};

export default CheckBoxField;
