import styled from "styled-components";

interface IAlertProps {
  status: string;
  disabled: boolean;
  text: string;
}

function Alert(props: IAlertProps) {
  const Container = styled.div`
    visibility: ${props.disabled ? "hidden" : "visible"};
    border-radius: 2px;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    opacity: 60%;
    background: ${props.status === "success" ? "#ceebc3" : "#ffdbde"};
    color: ${props.status === "success" ? "green" : "red"};
    border: 1px solid ${props.status === "success" ? "green" : "red"};
  `;

  return <Container>{props.text}</Container>;
}

export { Alert };
