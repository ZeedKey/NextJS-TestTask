import styled from 'styled-components'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PayButton from '../buttons/PayButton'

interface IOpCont{
    id: number
    op_name: string
    img_url: string
}

const OperatorContainer = ( { id , op_name, img_url } : IOpCont ) => {
    return (
        <Container elevation={3}>
            <BoxStyled>
                <Title>{op_name}</Title>

                <Image src={img_url}/>
                <PayButton id={id}/>
            </BoxStyled>
        </Container>
    )
}

const Container = styled(Paper)`
margin: 1em;
width:15vmax;
`
const Image = styled.img`
margin: 1em;
height: 4vmax;
`;
const Title = styled.h4`
border-bottom: 1px dotted black;
`;
const BoxStyled = styled(Box)`
margin:2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default OperatorContainer
