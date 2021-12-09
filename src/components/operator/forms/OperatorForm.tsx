import InputList from '../lists/InputList'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
const Alarm = styled(Paper)`
opacity:50%;
color:red;
margin:1em;
padding:0.5em;
`

interface IOpForm{
    opName: string
}

const OperatorForm = ({opName} : IOpForm) => {
    const [display, setDisplay] = useState("none");
    const router = useRouter();

    const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        (Math.random() * 100 > 50) ? setDisplay("inline-block") : router.push("/");
    }

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <InputList opName={opName} />
                <Alarm sx={{display:display}} elevation={2}>Oops! Something went wrong!</Alarm>
            </Form>
        </Container >
    )
}

export default OperatorForm
