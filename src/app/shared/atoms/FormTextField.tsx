import React from "react";
import { useField, FieldAttributes } from "formik";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface FormTextFieldProps extends FieldAttributes<any> {
  label?: string;
  customCallback?: (data?: any) => void; // Define the custom callback prop
  type?: string; // Add type prop to conditionally render the eye icon
  showPriceSymbol?: boolean;
  showPercentageSymbol?: boolean;
  fullWidth?: boolean;
  disabled?: boolean | any;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  customCallback, // Destructure the custom callback prop
  type = "text", // Default type is 'text'
  showPriceSymbol,
  showPercentageSymbol,
  fullWidth,
  disabled = false,
  ...props
}) => {
  const [field, meta] = useField(props.name as string);
  const [showPassword, setShowPassword] = React.useState(false);

  // Call the custom callback when the input field changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (customCallback) {
      customCallback(event?.target?.value);
    } else field.onChange(event);
  };

  const error = meta.touched && meta.error ? true : false;

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Ensure the value is always defined
  const value = field.value ?? "";

  return (
    <>
      {label && (
        <Typography
          className="uppercase label"
          sx={{ marginBottom: "1rem", fontSize: "12px", fontFamily: "Poppins" }}
        >
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        type={
          type === "password" ? (showPassword ? "text" : "password") : "text"
        } // Set type based on conditions
        {...field}
        {...props}
        value={value} // Ensure value is always defined
        disabled={Boolean(disabled)}
        onChange={handleInputChange} // Use the custom onChange handler
        error={error}
        helperText={error ? meta.error : ""}
        InputProps={
          meta?.value && type === "password"
            ? {
                // Conditionally render the eye icon
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : showPriceSymbol
            ? {
                // Conditionally render the €
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }
            : showPercentageSymbol
            ? {
                // Conditionally render the €
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }
            : undefined // Don't provide InputProps if it's not a password field
        }
        autoComplete="off"
        sx={{
          "& .MuiOutlinedInput-input": {
            padding: "13.5px 14px", // Adjust the padding value as needed
          },
        }}
      />
    </>
  );
};
