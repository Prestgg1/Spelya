import * as Yup from "yup";

const requiredMessage = "Lütfen bu alanı doldurunuz.";

export const licenceSchema = Yup.object().shape({
  alanAdi: Yup.string()
    .required(requiredMessage)
    .matches(/^[a-zA-Z0-9-.]+$/, "Alan adı sadece harf, rakam ve tire içerebilir."),
  firmaAdi: Yup.string()
    .required(requiredMessage)
    .min(2, "Firma adı en az 2 karakter olmalıdır.")
    .max(100, "Firma adı en fazla 100 karakter olabilir."),
  lisansAdi: Yup.string()
    .required(requiredMessage)
    .min(1, "Geçerli bir lisans adı seçiniz."),
  lisansTuru: Yup.string()
    .required(requiredMessage)
    .oneOf(['monthly', 'yearly'], "Geçerli bir lisans türü seçiniz.")
});
