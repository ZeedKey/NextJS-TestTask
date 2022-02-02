import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Button } from "..";

const Card = styled.div`
  text-align: center;
  margin: 2rem;
  padding: 2rem;
  width: 8rem;
  height: 9rem;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
const Name = styled.div`
  margin: 1rem;
  font-weight: 450;
  border-bottom: 1px dotted black;
`;

interface IOperatorProps {
  name: string;
  icon: string;
}

function OperatorCard(props: IOperatorProps) {
  return (
    <Card>
      <Name>{props.name}</Name>
      <Image
        src={props.icon}
        width={50}
        height={50}
        alt={"operator_image_" + props.name}
      />

      <Link href={"/operator/" + props.name}>
        <Button type="button">Выбрать</Button>
      </Link>
    </Card>
  );
}

export { OperatorCard };
