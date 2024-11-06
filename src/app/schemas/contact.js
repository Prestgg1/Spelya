import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('İsim alanı zorunludur')
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(50, 'İsim en fazla 50 karakter olabilir'),
  
  email: Yup.string()
    .required('E-posta alanı zorunludur')
    .email('Geçerli bir e-posta adresi giriniz'),
  
  message: Yup.string()
    .required('Mesaj alanı zorunludur')
    .min(10, 'Mesaj en az 10 karakter olmalıdır')
    .max(1000, 'Mesaj en fazla 1000 karakter olabilir')
});

export default contactSchema;
