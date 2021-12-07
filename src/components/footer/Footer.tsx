import styled from 'styled-components'
import { Box, Link } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={footerStyle}>
            BraveDevelopers
            <StyledLink href="https://github.com/ZeedKey">Volokh "ZeedKey" Yaroslav</StyledLink>
        </Box>
    )
}

const StyledLink = styled(Link)`
margin:0.2em;
`;

const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
}

export default Footer
