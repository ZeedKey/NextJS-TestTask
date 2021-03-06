import type { NextPage } from "next";
import { useRouter } from "next/router";
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
  const [opName, setOpName] = useState<string>("");
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const router = useRouter();
  const doChangeOpName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpName(e.target.value);
    e.target.value.trim().length > 0 && !e.target.value.trim().match(/[^a-zA-Z0-9_а-яёА-ЯЁ]/gm)
      ? setDisabled(false)
      : setDisabled(true);
  };

  const doSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/operator/" + opName);
  };

  return (
    <MainLayout>
      <OperatorsBlock>
        {operators.map(
          (operator): JSX.Element => (
            <Card
              key={operator.name}
              name={operator.name}
              icon={operator.icon}
            />
          )
        )}
      </OperatorsBlock>
      <OptionalBlock onSubmit={doSubmit}>
        <Input
          name="optionalOpName"
          onChange={doChangeOpName}
          placeholder="Введите имя своего оператора"
        />
        <Button type="submit" disabled={isDisabled}>
          Выбрать
        </Button>
      </OptionalBlock>
    </MainLayout>
  );
};

export default Home;
