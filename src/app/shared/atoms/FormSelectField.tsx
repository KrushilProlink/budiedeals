import React from "react";
import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";
import { useField, FieldAttributes } from "formik";

interface FormikSelectProps extends FieldAttributes<any> {
  label?: string;
  options?: { value: string | number; label: string }[];
  onChangeCallback?: (value: any, valueObj?: any) => void;
  placeHolder?: string;
  isMultiple?: boolean;
  customWidth?: any;
  customMarginLeft?: any;
  disabled?: any;
}

export const FormSelectField: React.FC<FormikSelectProps> = ({
  label,
  options,
  placeHolder,
  onChangeCallback,
  isMultiple = false,
  customWidth,
  customMarginLeft,
  disabled,
  ...props
}) => {
  const [field, meta, helpers] = useField(props as FieldAttributes<{}>);

  const handleChange = (
    event: SelectChangeEvent<typeof props & { name?: string }>
  ) => {
    const selectedValue = event.target.value;

    helpers.setValue(selectedValue);

    if (onChangeCallback && typeof onChangeCallback === "function") {
      onChangeCallback(selectedValue, event?.target);
    }
  };

  const error = meta.touched && meta.error ? true : false;
  return (
    <FormControl fullWidth>
      <Typography
        className="uppercase label"
        sx={{ marginBottom: "1rem" }}
        fontSize={"0.8rem"}
      >
        {label}
      </Typography>
      <Select
        {...field}
        {...props}
        value={field.value || (isMultiple ? [] : "")} // Initialize value as empty array for multiple select or empty string for single select
        onChange={handleChange}
        error={error}
        multiple={isMultiple}
        disabled={disabled}
        renderValue={(selected) => {
          if (isMultiple) {
            return (selected as string[])
              .map((value) => {
                const selectedOption = options?.find(
                  (option) => option.value === value
                );
                return selectedOption ? selectedOption.label : "";
              })
              .join(", ");
          } else {
            const selectedOption = options?.find(
              (option: any) => option.value === selected
            );
            return selectedOption
              ? selectedOption.label
              : placeHolder || "Select";
          }
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300, // Set the maximum height here
              width: customWidth !== undefined ? 220 : undefined,
              marginLeft: customMarginLeft !== undefined ? 55 : undefined,
            },
          },
        }}
      >
        {options?.map((option, key: number) => (
          <MenuItem key={key} value={option?.value}>
            {isMultiple && (
              <Checkbox
                checked={(field?.value as string[])?.includes(
                  option?.value?.toString()
                )}
                defaultChecked={(field?.value as string[])?.includes(
                  option?.value?.toString()
                )}
              />
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {error && meta.error ? (
          <span
            className="MuiFormHelperText-root Mui-error"
            style={{ color: "#d32f2f" }}
          >
            {meta.error}
          </span>
        ) : (
          ""
        )}
      </FormHelperText>
    </FormControl>
  );
};
