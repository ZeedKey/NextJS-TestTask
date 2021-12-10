import styled from 'styled-components'
import { Link } from '@mui/material'

const StyledLink = styled(Link)`
margin:0.2em;
`;

const FooterStyled = styled.footer`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
background-color: #F8F8F8;
border-top: 1px solid #E7E7E7;
position: fixed;
left: 0;
bottom: 0;
height: 60px;
width: 100%;
`;

const Footer = () => {
    return (
        <FooterStyled>
            BraveDevelopers
            <StyledLink href="https://github.com/ZeedKey">Volokh -ZeedKey- Yaroslav</StyledLink>
        </FooterStyled>
    )
}

export default Footer
