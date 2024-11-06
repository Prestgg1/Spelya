import * as Yup from "yup";
const requiredMessage = "Lütfen bu alanı doldurunuz.";
const requiredEmailMessage = "Lütfen geçerli bir email giriniz.";

export const Subs = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  email: Yup.string().email(requiredEmailMessage).required(requiredMessage),
  phone:Yup.number().required(requiredMessage),
  tcnumber:Yup.number().required(requiredMessage)
});
