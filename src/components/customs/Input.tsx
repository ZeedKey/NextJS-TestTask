import InputMask from "react-input-mask";
import {
  FormControl,
  InputAdornment,
  Input as MuiInput,
  FormHelperText,
} from "@mui/material";
import React from "react";

interface IProps {
  placeholder: string;
  mask?: string;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  postfix?: string;
  name?: string;
  onChange?: React.ChangeEventHandler;
  type?: "number" | "text";
}

export default function Input(props: IProps) {
  const mask = props.mask == undefined ? "" : props.mask;
  return (
    <InputMask
      mask={mask}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    >
      <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
        <MuiInput
          name={props.name}
          error={props.error}
          disabled={props.disabled}
          id="standard-adornment-weight"
          value={props.value}
          endAdornment={
            <InputAdornment position="end">{props.postfix}</InputAdornment>
          }
          aria-describedby="standard-weight-helper-text"
        />

        <FormHelperText id="standard-weight-helper-text">
          {props.placeholder}
        </FormHelperText>
      </FormControl>
    </InputMask>
  );
}
