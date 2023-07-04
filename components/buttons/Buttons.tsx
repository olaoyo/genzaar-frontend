import styled, { css } from "styled-components";

const CustomButton = styled.button<{ signIn: boolean }>`
  ${({ signIn }) =>
    signIn
      ? css`
          grid-column: 11 / span 1;
          justify-self: end;
          align-self: center;
          margin-right: -3.5rem;

          width: 11.4rem;
          height: 4.4rem;
          border: 1px solid ${({ theme }) => theme.colors.grey.one};
          border-radius: 2.4rem;
          color: ${({ theme }) => theme.colors.tertiary};
          background-color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          transition: all 0.2s ease-in-out;

          :hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.grey.one};
            color: ${({ theme }) => theme.colors.primary};
            transform: translateY(-2px) scale(1.01);
          }

          :active {
            transform: translateY(0) scale(1);
          }
        `
      : css``}
`;

export { CustomButton };
