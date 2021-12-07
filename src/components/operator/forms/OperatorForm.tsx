import InputList from '../lists/InputList'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface IOpForm{
    opName: string
}

const OperatorForm = ({opName} : IOpForm) => {
    const [isActive, setActive] = useState("none");
    const router = useRouter();

    const Alarm = styled(Paper)`
    display: ${isActive};
    opacity:50%;
    color: red;
    margin:1em;
    padding:0.5em;
    `
    const submitHandler = (e) => {
        e.preventDefault();
        (Math.random() * 100 > 50) ? setActive("inline-block") : router.push("/");
    }

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <InputList opName={opName} />
                <Alarm elevation={2}>Oops! Something went wrong!</Alarm>
            </Form>
        </Container >
    )
}
const Container = styled(Box)`
display: flex;
justify-content: center;
align-items: center;
margin:3em;
@media (max-width: 1200px) {
    margin:1em;
}
`

const Form = styled.form`
width: 30vmax;
height: 30vmax;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 5px grey;

@media (max-width: 1200px) {
    margin:2em;
    width: 100%;
    height: 100%;
  }
`
export default OperatorForm
