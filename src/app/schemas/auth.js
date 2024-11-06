import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useAuthSchemas = () => {
  const t = useTranslations("AuthMessages");

  const loginSchema = useMemo(() => Yup.object().shape({
    email: Yup.string().email(t("requiredEmailMessage")).required(t("requiredEmail")),
    password: Yup.string().required(t("requiredPassword")),
  }), [t]);

  const registerSchema = useMemo(() => Yup.object().shape({
    name: Yup.string().required(t("requiredName")),
    surname: Yup.string().required(t("requiredSurname")),
    company: Yup.string().required(t("requiredCompany")),
    email: Yup.string().email(t("requiredEmail")).required(t("requiredEmail")),
    phoneNumber: Yup.string()
    .matches(/^s*-?[0-9]{10}s*$/, t("requiredPhoneNumberMessage"))
    .required(t("requiredNumberMessage")),
    password: Yup.string()
      .min(8, t("passwordMinMessage"))
      .matches(/[a-zA-Z]/, t("passwordLetterMessage"))
      .matches(/[0-9]/, t("passwordNumberMessage"))
      .required(t("requiredPassword")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("passwordMatchMessage"))
      .required(t("requiredConfirmPassword")),
    checkbox: Yup.boolean().oneOf([Yup.ref("checkbox"), false], "Lütfen kullanım koşullarını kabul ediniz."),
  }), [t]);

  return { loginSchema, registerSchema };
};
