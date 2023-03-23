import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Controller } from "react-hook-form";
import "./_register.css";
const CheckboxFields = ({ name, control }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            className="black-text"
            control={<Checkbox {...field} required />}
            label="I Agree to MyApp Terms and Privacy Policy"
          />
        )}
      />
    </>
  );
};

export default CheckboxFields;
