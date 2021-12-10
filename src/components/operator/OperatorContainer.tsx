import styled from 'styled-components'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

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

interface IOpCont{
    id     : number
    op_name: string
    img_url: string
}

const OperatorContainer = ( { id , op_name, img_url } : IOpCont ) => {

    const router = useRouter();
    const toPay = () => router.push('/operator/' + id);

    return (
        <Container elevation={3}>
            <BoxStyled>
                <Title>{op_name}</Title>

                <Image src={img_url}/>
                <Button sx={{margin:3}}variant="contained" onClick={toPay}>PAY</Button>
            </BoxStyled>
        </Container>
    )
}

export default OperatorContainer