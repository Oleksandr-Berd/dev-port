import styled from "@emotion/styled";

type Props = {
  bg: string;
};

type InputProps = {
  status?: string | null;
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

    @media (min-width: 768px) {
      transform: translateY(-40px);
    }
  }

  @media (min-width: 768px) {
    text-align: center;

    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    padding-left: 165px;
  }
`;

export const TextCon = styled.div`
  @media (min-width: 1440px) {
    margin-right: 220px;

    text-align: left;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 20px;

  text-align: center;

  font-size: 40px;
  letter-spacing: -1.14px;

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const FormParagraph = styled.p`
  margin-bottom: 50px;

  text-align: center;

  line-height: 1.6;
  color: #d9d9d9;

  @media (min-width: 768px) {
    display: inline-block;
    width: 445px;
  }

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 87px;

  border-bottom: 1px solid #979797;

  @media (min-width: 768px) {
    padding-left: 132px;
    padding-right: 132px;
    padding-bottom: 92px;
  }

  @media (min-width: 1440px) {
min-width: 445px;

    padding: 0;

    border-bottom: none;
  }
`;

export const InputStyled = styled.input<InputProps>`
  width: calc(100% - 32px);

  display: inline-block;
  padding-left: 24px;
  padding-bottom: 17px;

  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.22px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #979797;
  border-bottom-color: ${(props) =>
    props.status === "success"
      ? "#4EE1A0"
      : props.status === "error"
      ? "#ff6f5b"
      : "#979797"};

  &:focus {
    outline: none;
  }
`;

export const TextAreaStyled = styled.textarea<InputProps>`
  width: calc(100% - 32px);
  height: 107px;

  padding-left: 24px;
  padding-bottom: 17px;

  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  letter-spacing: -0.22px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #979797;
  border-bottom-color: ${(props) =>
    props.status === "success"
      ? "#4EE1A0"
      : props.status === "error"
      ? "#ff6f5b"
      : "#979797"};

  &:focus {
    outline: none;
  }
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

export const InputCon = styled.div`
  text-align: right;
  margin-bottom: 32px;
`;

export const InputError = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: #ff6f5b;
`;
