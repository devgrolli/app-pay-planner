import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CommonColors } from "@/core/colors";

interface InputProps {
  color: string;
  fullWidth?: boolean;
  withBorderColor?: boolean;
  hasMoreInfo?: boolean;
  bottom?: number;
  label: string;
  backgroundColor?: string;
  top?: number;
  value: any;
  styles?: React.CSSProperties;
  type?: string;
  mask?: string;
  showSearchIcon?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  handleCallback?: (value: any) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
}

export function Input({
  onBlur,
  onFocus,
  onChange,
  handleCallback,
  mask,
  value,
  label,
  color,
  styles,
  fullWidth,
  helperText,
  top = 0,
  rows = 4,
  type = "text",
  error = false,
  hasMoreInfo = false,
  bottom = 10,
  multiline = false,
  withBorderColor = true,
  showSearchIcon = false,
  backgroundColor = "transparent",
  disabled = false,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const renderEndAdornment = () => {
    if (type === "password") {
      return (
        <InputAdornment position="end">
          <IconButton
            onClick={togglePasswordVisibility}
            onMouseDown={(e) => e.preventDefault()}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      );
    }

    if (showSearchIcon) {
      return (
        <InputAdornment position="end">
          <IconButton onClick={() => handleCallback?.(value)}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      );
    }

    if (hasMoreInfo) {
      return (
        <InputAdornment position="end">
          <IconButton
            onClick={() => handleCallback?.(value)}
            style={{ color: error ? CommonColors.secondary : CommonColors.disabled }}
          >
            <HelpOutline />
          </IconButton>
        </InputAdornment>
      );
    }

    return null;
  };

  const renderTextField = (inputProps: any) => (
    <TextField
      fullWidth={fullWidth}
      label={label}
      variant="outlined"
      type={showPassword && type === "password" ? "text" : type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      disabled={disabled}
      InputLabelProps={{
        ...(type === "date" && { shrink: true }),
      }}
      inputProps={{
        ...(inputProps as any),
        ...(type === "date" && { max: new Date().toISOString().split("T")[0] }),
      }}
      InputProps={{
        endAdornment: renderEndAdornment(),
      }}
      style={{ marginBottom: bottom, marginTop: top, ...styles }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: backgroundColor,
          borderRadius: "15px",
          "& fieldset": {
            borderColor: error ? CommonColors.secondary : "#d8d8d8",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: withBorderColor ? "#d8d8d8" : "transparent",
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
          color: error ? CommonColors.secondary : "#d8d8d8",
          "&.Mui-focused": {
            color: color,
          },
        },
      }}
    />
  );

  return mask ? (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {(inputProps: any) => renderTextField(inputProps)}
    </InputMask>
  ) : (
    renderTextField({})
  );
}