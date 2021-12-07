import styled from 'styled-components'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PayButton from '../buttons/PayButton'

//Contains

const OperatorContainer = ( {props} ) => {
    const { id , op_name, img_url } = props;
    return (
        <Container elevation={3}>
            <Box sx={boxStyle}>
                <Title>{op_name}</Title>

                <Image src={img_url}/>
                <PayButton id={id}/>
            </Box>
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
const boxStyle = {
    margin:2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default OperatorContainer
