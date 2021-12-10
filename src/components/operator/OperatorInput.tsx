import InputMask from 'react-input-mask'
import { FormControl,InputAdornment,Input,FormHelperText } from '@mui/material'
import React, { ChangeEventHandler } from 'react'

interface IProps {
  placeholder: string
  mask?      : string
  error?     : boolean
  isDisabled?: boolean
  value?     : string
  postfix?   : string
  onChange?  : ChangeEventHandler<HTMLInputElement>
}

export default function OperatorInput(props : IProps) {
  const mask = (props.mask===undefined) ? "" : props.mask;
    return(
      <InputMask mask={mask}>

        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            error={props.error}
            disabled={props.isDisabled}
            value={props.value}
            onChange={props.onChange}
            id="standard-adornment-weight"
            
            endAdornment={
            <InputAdornment position="end">
              {props.postfix}
            </InputAdornment>}
            
            aria-describedby="standard-weight-helper-text"
          />

          <FormHelperText id="standard-weight-helper-text">
            {props.placeholder}
          </FormHelperText>
        </FormControl>  

    </InputMask>
    )
}