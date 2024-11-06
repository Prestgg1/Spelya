import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useChangePassword = () => {
  const t = useTranslations("AuthMessages");
  const changePassword = useMemo(() => Yup.object().shape({
    oldpassword: Yup.string()
      .min(8, t("passwordMinMessage"))
      .matches(/[a-zA-Z]/, t("passwordLetterMessage"))
      .matches(/[0-9]/, t("passwordNumberMessage"))
      .required(t("requiredPassword")),
    password: Yup.string()
      .min(8, t("passwordMinMessage"))
      .matches(/[a-zA-Z]/, t("passwordLetterMessage"))
      .matches(/[0-9]/, t("passwordNumberMessage"))
      .notOneOf([Yup.ref("oldpassword")], t("oldpassword"))
      .required(t("requiredPassword")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("passwordMatchMessage"))
      .required(t("requiredConfirmPassword")),
  }), [t]);

  return { changePassword };
};
