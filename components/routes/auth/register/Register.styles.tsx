import styled, { css } from "styled-components";
import Link from "next/link";

const RegisterFormContainer = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 9rem;
  padding-top: 2rem;
`;

// For the left side of the Register form

const RegisterFormLeft = styled.div`
  grid-column: 1 / span 1;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;
  justify-self: center;
  padding: 4rem 0 0 10rem;
`;

const RegisterHeader = styled.h4`
  grid-row: 1 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  line-height: 1.2;
`;

const RegisterText = styled.p<{
  header?: boolean;
  email?: boolean;
  password?: boolean;
  terms?: boolean;
  paragraph?: boolean;
}>`
  ${({ header, email, password, terms, paragraph }) =>
    header
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
          margin-left: -16rem;
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
      : css``}
`;

const RegisterImage = styled.div`
  grid-row: 3 / span 1;
  justify-self: end;
`;

// For the right side of the Register form

const RegisterFormRight = styled.div`
  grid-column: 2 / span 1;

  display: grid;
  justify-self: center;
  padding: 4rem 10rem 0 0;
`;

const LabelAndInput = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

const TermsAndConditions = styled.div`
  display: grid;

  grid-template-columns: repeat(2, max-content);
  column-gap: 1rem;
  margin: -2rem 0 0 -14rem;
`;

const Checkbox = styled.input`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.colors.grey.one};
  border: 6px solid ${({ theme }) => theme.colors.grey.one};
`;

const RegisterLink = styled(Link)``;

export {
  RegisterFormContainer,
  RegisterFormLeft,
  RegisterHeader,
  RegisterText,
  RegisterImage,
  RegisterFormRight,
  LabelAndInput,
  TermsAndConditions,
  Checkbox,
  RegisterLink,
};
