import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignUpStep3 = () => {
  const navigate = useNavigate();
  const onSignupPrev = () => {
    navigate("/signup2");
  };

  //   const onSignupNext = () => {
  //     navigate("/signup3");
  //   };
  return (
    <Wrapper>
      <p>STEP 3</p>
      <FormWrapper>
        <p>하고싶은 말</p>
        <input name="하고싶은 말" />
      </FormWrapper>

      <button onClick={onSignupPrev}>Prev</button>
      <button>회원가입</button>
    </Wrapper>
  );
};
export default SignUpStep3;
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
    color: #000;
    font-size: small;
    margin: 5px 0;
  }
`;
