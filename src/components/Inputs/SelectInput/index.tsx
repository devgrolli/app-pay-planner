import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import { CommonColors } from "@/core/colors";

interface SelectInputProps {
  color: string;
  fullWidth?: boolean;
  withBorderColor?: boolean;
  bottom?: number;
  label: string;
  backgroundColor?: string;
  top?: number;
  value: any;
  styles?: React.CSSProperties;
  options: { label: string; value: any; icon?: React.ReactNode }[];
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

export function SelectInput({
  color,
  fullWidth,
  label,
  top = 0,
  bottom = 10,
  withBorderColor = true,
  backgroundColor = "transparent",
  styles,
  value,
  options,
  error = false,
  helperText,
  onChange,
}: SelectInputProps) {
  const selectedOption = options.find(option => option.value === value);
  const greyColor = "#d8d8d8";

  return (
    <TextField
      select
      fullWidth={fullWidth}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      style={{ marginBottom: bottom, marginTop: top, ...styles }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: backgroundColor,
          borderRadius: "15px",
          "& fieldset": {
            borderColor: error ? CommonColors.secondary : greyColor,
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: withBorderColor ? greyColor : "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? CommonColors.secondary : color,
          },
          "&.Mui-error fieldset": {
            borderColor: CommonColors.secondary,
          },
        },
        "& .MuiFormHelperText-root": {
          color: CommonColors.secondary,
        },
        "& .MuiInputLabel-root": {
          color: error ? CommonColors.secondary : greyColor,
          "&.Mui-focused": {
            color: color,
          },
        },
      }}
      InputProps={{
        startAdornment: selectedOption?.icon ? (
          <InputAdornment position="start">
            <span style={{ marginRight: 10, display: "flex", alignItems: "center" }}>
              {selectedOption.icon}
            </span>
          </InputAdornment>
        ) : null,
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {option.value !== value && option.icon && (
            <span
              style={{
                marginRight: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              {option.icon}
            </span>
          )}
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}