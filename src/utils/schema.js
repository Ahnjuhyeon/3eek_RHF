import * as yup from "yup";
export const schema = yup.object({
  email: yup
    .string()
    .required("필수!")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "형식맞춰"
    ),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
      "비밀번호는 8글자 이상 대소문자 특수문자를 1자 이상 포함해주세요."
    ),
});
//오 된다된다...
