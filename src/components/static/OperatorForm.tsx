import styled from "styled-components";
import { useState } from "react";
import { Button, Input, Alert, validationSchema } from "..";
import { useRouter } from "next/router";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem;
  padding: 6rem 1.5rem;
  width: 25rem;
  height: 20rem;
  box-shadow: 4px 4px 8px 3px rgba(34, 60, 80, 0.2);
  h2,h5 {
    margin: 1rem;
    font-weight: 400;
  }
  h5 {
    margin: 0.7rem;
    opacity: 60%;
  }
  h2 {
    font-size: 3ch;
    margin: 0.3rem;
  }
`;

interface IFormProps {
  name: string;
}
interface IFormState {
  phone: string;
  money: string;
}

const OperatorForm = (props: IFormProps) => {
  const [form, setForm] = useState<IFormState>({
    phone: "",
    money: "",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("");
  const router = useRouter();

  const getValidity = async () => {
    await validationSchema
      .validate({
        phone: form.phone.replace(/[^\d]/g, ""),
        money: Number(form.money.replace(/[^\d]/g, "")),
      })
      .then(() => {
        if (Math.random() > 0.5) {
          setStatus("success");
          setTimeout(() => router.push("/"), 1000);
        } else setStatus("failed");
      })
      .catch(() => setStatus("failed"))
      .finally(() => setIsDisabled(false));
  };
  const doFormChange = (e: React.ChangeEvent<HTMLFormElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const doFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getValidity();
  };

  return (
    <Form onSubmit={doFormSubmit}>
      <h2>Оплата</h2>
      <Input disabled={true} value={props.name} placeholder="Имя оператора" />
      <Input
        name="phone"
        onChange={doFormChange}
        mask="+7 (999) 999 9999"
        placeholder="Введите ваш номер телефона"
      />
      <Input
        name="money"
        onChange={doFormChange}
        mask="9999 RU"
        placeholder="Введите сумму от 1 до 1000 рублей"
      />
      <Button type="submit">Отправить</Button>
      <Alert disabled={isDisabled} status={status} />
    </Form>
  );
};

export default OperatorForm;
