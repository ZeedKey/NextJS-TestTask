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
  h2,
  h5 {
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
  const [isAlertDisabled, setAlertDisabled] = useState<boolean>(true);
  const [isBtnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const getValidity = async () => {
    const regex: RegExp = /[^\d]/g;
    await validationSchema
      .validate({
        phone: form.phone.replaceAll(regex, ""),
        money: Number(form.money.replaceAll(regex, "")),
      })
      .then(() => {
        if (Math.random() > 0.5) {
          setStatus("success");
          setMessage(
            "Успешно! Через 1 секунду вы будете перенаправлены на главную страницу"
          );
          setBtnDisabled(true);
          setTimeout(() => router.push("/"), 1000);
        } else {
          setStatus("failed");
          setMessage("Ошибка! Что-то пошло не так...");
        }
      })
      .catch(() => {
        setStatus("failed");
        setMessage("Ошибка! Данные указаны неверно!");
      })
      .finally(() => setAlertDisabled(false));
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
      <Button type="submit" disabled={isBtnDisabled}>
        Отправить
      </Button>
      <Alert disabled={isAlertDisabled} status={status} text={message} />
    </Form>
  );
};

export { OperatorForm };
