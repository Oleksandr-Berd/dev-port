import styled from "@emotion/styled";

type Props = {
  bg: string;
};

export const CommonCon = styled.div<Props>`
  position: relative;

  padding-top: 60px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #242424;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateY(-90px);

    content: url(${(props) => props.bg});
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;

  text-align: center;

  font-size: 40px;
  letter-spacing: -1.14px;
`;

export const FormParagraph = styled.p`
  margin-bottom: 50px;

  text-align: center;

  line-height: 1.6;
  color: #d9d9d9;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 87px;

  border-bottom: 1px solid #979797;
`;

export const InputStyled = styled.input`
  margin-bottom: 32px;
  padding-left: 24px;
  padding-bottom: 17px;

  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.22px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #979797;
`;

export const TextAreaStyled = styled.textarea`
  height: 107px;

  padding-left: 24px;
  padding-bottom: 17px;
  margin-bottom: 32px;

  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.22px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #979797;
`;

export const ButtonCon = styled.div`
  text-align: right;
`;

export const SubmitButton = styled.button`
  padding-bottom: 10px;

  text-transform: uppercase;
  color: #fff;
  line-height: 1.6;
  letter-spacing: 2.29px;
  background-color: transparent;
  border: none;

  border-bottom: 1px solid #4ee1a0;
`;