import InputMask from 'react-input-mask'
import { FormControl,InputAdornment,Input,FormHelperText } from '@mui/material'

export default function OperatorInput(props) {
    return(
      <InputMask mask={props.mask} maskChar="*">

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