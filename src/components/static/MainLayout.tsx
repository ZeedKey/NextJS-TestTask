import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 4rem;
  flex-direction: column;
`;

function MainLayout({ children }: JSX.ElementChildrenAttribute) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  );
}

export default MainLayout;
