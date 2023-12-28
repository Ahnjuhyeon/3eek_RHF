import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SignUpStep1 = () => {
  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors); //오 떳어
  //nvigate
  const navigate = useNavigate();
  const onSignupNext = () => {
    navigate("/signup2");
  };
  return (
    <Wrapper>
      <p>STEP 1</p>

      <FormWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          id="email"
          type="text"
          placeholder="이메일아이디"
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors?.email ? <p>{errors.email?.message}</p> : null}

        {/* 비밀번호 */}
        <input
          id="password"
          type="text"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message:
                "비밀번호는 8글자 이상 대소문자 특수문자를 1자 이상 포함해주세요.",
            },
          })}
        />
        {errors?.password ? <p>{errors.password?.message}</p> : null}
        {/* 비밀번호 확인 */}
        {/* <input id="passwordcheck" type="password" placeholder="비밀번호 확인" /> */}
        <button>확인</button>
      </FormWrapper>
      <button onClick={onSignupNext}>Next</button>
    </Wrapper>
  );
};
export default SignUpStep1;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FormWrapper = styled.form`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > input {
    width: 200px;
    height: 30px;
    margin-bottom: 10px;
  }
  & > button {
    width: 208px;
  }
  & > p {
    color: red;
    font-size: small;
    margin: 5px 0;
  }
`;
