import styled, { css } from "styled-components";

const CustomInput = styled.input<{ authText?: boolean }>`
  ${({ authText }) =>
    authText
      ? css`
          width: 44rem;
          height: 5.6rem;
          padding: 2rem;
          align-items: center;

          border-radius: 0.8rem;
          border: 1px solid ${({ theme }) => theme.colors.grey.two};

          &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem
              rgba(${({ theme }) => theme.colors.grey.one}, 0.1);
            border: 1px solid ${({ theme }) => theme.colors.purple};
          }

          &:focus:invalid {
            border: 1px solid ${({ theme }) => theme.colors.secondary};
          }

          &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.colors.grey.two};
          }
        `
      : css``}
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p8};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export { CustomInput, Label };
