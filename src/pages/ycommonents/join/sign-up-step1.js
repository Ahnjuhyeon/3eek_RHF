import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { schema } from "../../../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
const SignUpStep1 = () => {
  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(errors); //오 떳어
  //nvigate
  const navigate = useNavigate();
  const onSignupNext = (data) => {
    navigate("/signup2", {
      state: { email: data.email, password: data.password },
    });
    console.log(data.email);
  };
  return (
    <Wrapper>
      <p>STEP 1</p>

      <FormWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
          // alert("이메일:" + data.email + " " + "비밀번호:" + data.password);
        })}
      >
        <input
          id="email"
          type="text"
          placeholder="이메일아이디"
          {...register("email")}
        />
        {errors?.email ? <p>{errors.email?.message}</p> : null}

        {/* 비밀번호 */}
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          {...register("password")}
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
