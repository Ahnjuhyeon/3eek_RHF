import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CSignUpStep1 = () => {
  //useForm
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      // select: {},
    },
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
      <p>STEP C1</p>

      <FormWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
          // alert("이메일:" + data.email + " " + "비밀번호:" + data.password);
        })}
      >
        <Controller
          name="email"
          // control={control}
          // type="text"
          // placeholder="이메일아이디"
          // name="id"
          control={control}
          rules={{
            required: "필수!",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          }}
          render={({ field }) => (
            <input placeholder="이메일아이디" {...field} />
          )}
        />
        {errors?.email ? <p>{errors.email?.message}</p> : null}

        {/* 비밀번호 */}
        <Controller
          name="pw"
          // type="text"
          // placeholder="비밀번호"
          control={control}
          rules={{
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message:
                "비밀번호는 8글자 이상 대소문자 특수문자를 1자 이상 포함해주세요.",
            },
          }}
          render={({ field }) => (
            <input placeholder="비밀번호" type="password" {...field} />
          )}
        />
        {errors?.pw ? <p>{errors.pw?.message}</p> : null}
        <button>확인</button>
      </FormWrapper>
      <button onClick={onSignupNext}>Next</button>
    </Wrapper>
  );
};
export default CSignUpStep1;
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
