import * as yup from "yup";
import "yup-phone";

export const validationSchema = yup.object().shape({
  phone: yup.string().phone("RU").required(),
  money: yup.number().min(1).max(1000).required(),
});
