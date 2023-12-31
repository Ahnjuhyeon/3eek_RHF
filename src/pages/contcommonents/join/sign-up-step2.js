import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignUpStep2 = () => {
  //useForm
  const { register } = useForm();

  //nvigate
  const navigate = useNavigate();
  const onSignupPrev = () => {
    navigate("/signup1");
  };

  const onSignupNext = () => {
    navigate("/signup3");
  };

  return (
    <Wrapper>
      <p>STEP 2</p>
      <FormWrapper>
        <input id="name" type="text" placeholder="이름" />
        <input id="birth" type="text" placeholder="생년월일" />
        <input id="number" placeholder="휴대폰번호" />
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
