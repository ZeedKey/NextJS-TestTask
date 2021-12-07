import * as yup from 'yup';
import "yup-phone";

export const phoneSchema = yup.object().shape({
    phoneNum : yup.string().phone("RU").required()
});

export const moneySchema = yup.object().shape({
    money : yup.number().min(1).max(1000).required()
});
