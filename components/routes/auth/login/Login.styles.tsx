import styled, { css } from "styled-components";
import Link from "next/link";

const LoginFormContainer = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: center;
  column-gap: 9rem;
  padding: 2rem 0 8rem 0;
`;

const LoginFormLeft = styled.div`
  grid-column: 1 / span 1;
`;

const LoginFormMiddle = styled.div`
  grid-column: 2 / span 1;
`;

const LoginFormRight = styled.div`
  grid-column: 3 / span 1;
`;

const LoginText = styled.p<{
  header?: boolean;
  email?: boolean;
  password?: boolean;
  terms?: boolean;
  paragraph?: boolean;
  forgotPassword?: boolean;
}>`
  ${({ header, email, password, terms, paragraph, forgotPassword }) =>
    header
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
          margin-left: -33rem;
        `
      : email
      ? css`
          grid-row: 2 / span 1;
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : password
      ? css`
          grid-row: 2 / span 1;
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : terms
      ? css`
          color: ${({ theme }) => theme.colors.grey.five};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
          font-weight: ${({ theme }) => theme.fontWeights.regular};

          span {
            font-weight: ${({ theme }) => theme.fontWeights.bold};
          }
        `
      : paragraph
      ? css`
          color: ${({ theme }) => theme.colors.grey.five};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
        `
      : forgotPassword
      ? css`
          grid-column: 2 / span 1;
          justify-items: end;
          color: ${({ theme }) => theme.colors.grey.five};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
          font-weight: ${({ theme }) => theme.fontWeights.regular};
          justify-self: end;
        `
      : css``}
`;

const LabelAndInput = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

const TermsAndConditionsAndForgotPassword = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  width: 44rem;
  margin-top: -2rem;
`;

const TermsAndConditions = styled.div`
  grid-column: 1 / span 1;
  display: grid;

  grid-template-columns: repeat(2, max-content);
  column-gap: 1rem;
`;

const Checkbox = styled.input`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.grey.one};
  border: 6px solid ${({ theme }) => theme.colors.grey.one};
`;

const LoginLink = styled(Link)``;

export {
  LoginFormContainer,
  LoginFormLeft,
  LoginFormMiddle,
  LoginFormRight,
  LoginText,
  LabelAndInput,
  TermsAndConditionsAndForgotPassword,
  TermsAndConditions,
  Checkbox,
  LoginLink,
};
