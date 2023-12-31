import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignUpStep2 = () => {
  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //nvigate
  const navigate = useNavigate();
  const onSignupPrev = () => {
    navigate("/signup1");
  };

  const onSignupNext = () => {
    navigate("/signup3");
  };
  //데이터값받을부분
  // const location = useLocation();
  // const { email, password } = location.state || {};

  // console.log("Received data in signup2:", email, password);
  const location = useLocation();
  console.log("Location state:", location.state);

  return (
    <Wrapper>
      <p>STEP 2</p>
      <FormWrapper
        onSubmit={handleSubmit((data) => {
          // console.log(data);
          alert(data.number);
        })}
      >
        <input id="name" type="text" placeholder="이름" />

        <input id="birth" type="text" placeholder="생년월일" />
        <input
          id="number"
          type="text"
          placeholder="휴대폰번호"
          {...register("number", {
            required: "휴대폰 입력해주세요",
            pattern: {
              // value: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
              value: /^010-\d{4}-\d{4}$/, //이것도 이상해 일단
              message: "휴대폰 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors?.number ? <p>{errors.number?.message}</p> : null}
        <button>확인</button>
      </FormWrapper>
      <button onClick={onSignupPrev}>Prev</button>
      <button onClick={onSignupNext}>Next</button>
    </Wrapper>
  );
};
export default SignUpStep2;

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
