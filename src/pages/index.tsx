import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import {
  OperatorCard as Card,
  MainLayout,
  operators,
  Input,
  Button,
} from "../components";

const OperatorsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const OptionalBlock = styled.form`
  display: flex;
  margin: 2em;
  flex-direction: column;
`;
const Home: NextPage = () => {
  const [opName, setOpName] = useState("");
  const doChangeOpName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOpName(e.target.value);

  return (
    <MainLayout>
      <OperatorsBlock>
        {operators.map((operator) => (
          <Card key={operator.name} name={operator.name} icon={operator.icon} />
        ))}
      </OperatorsBlock>
      <OptionalBlock>
        <Input
          name="optionalOpName"
          onChange={doChangeOpName}
          placeholder="Введите имя своего оператора"
        />
        <Link href={"/operator/" + opName}>
          <Button type="button">Выбрать</Button>
        </Link>
      </OptionalBlock>
    </MainLayout>
  );
};

export default Home;
