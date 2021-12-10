import OperatorInput from '../OperatorInput'
import styled from 'styled-components'
import { useEffect, useState, ChangeEvent} from 'react';
import {phoneSchema,moneySchema} from '../../PaymentValidation'
import { Button } from '@mui/material'

const InputBlock = styled.div`
width: 10vmax;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`

interface IInList {
    opName: string
}

const InputList = ( {opName}: IInList ) => {

    const [isPhoneValid, setPhoneValid] = useState(false);
    const [isMoneyValid, setMoneyValid] = useState(false);
    const [isAllValid, setAllValid] = useState(false);


    const changeAllValid = () => (isPhoneValid == true && isMoneyValid==true) ? setAllValid(true) : setAllValid(false);

    useEffect(() => {
        changeAllValid();
    });

    const changePhoneHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const phoneNum = e.target.value;
        const isValid = await phoneSchema.isValid( {phoneNum} );
        
        isValid ? setPhoneValid(true) : setPhoneValid(false);
    }

    const changeMoneyHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const money = e.target.value;
        const isValid = await moneySchema.isValid({money});

        isValid ? setMoneyValid(true) : setMoneyValid(false);
    }
    
    return (
        <InputBlock>
            <OperatorInput
            value={opName}
            isDisabled={true}
            placeholder="Choosen operator"/>

            <OperatorInput
            error={!isPhoneValid}
            onChange={changePhoneHandler}
            mask="+7 (999) 999 9999"
            placeholder="Type your phone number"/>

            <OperatorInput
            error={!isMoneyValid}
            onChange={changeMoneyHandler}
            placeholder="Type amount of money below 1000"
            postfix="RUB"/>

            <Button
            disabled={!isAllValid}
            sx={{margin:4}}
            variant="contained" 
            color="success"
            type="submit">PROCEED</Button>
        </InputBlock>
    )
}

export default InputList
