import Link from "next/link";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  text-align: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  p {
    margin: 0.4rem;
  }
`;
function Footer() {
  return (
    <Container>
      <p>
        <Link href="https://github.com/ZeedKey">Volokh -ZLint- Yaroslav</Link>
        <br />
        2022
      </p>
    </Container>
  );
}

export default Footer;
