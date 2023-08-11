import styled, { css } from "styled-components";

const CustomButton = styled.button<{
  signIn?: boolean;
  createAccount?: boolean;
  pocketMoney?: boolean;
  authButton?: boolean;
}>`
  ${({ signIn, createAccount, pocketMoney, authButton }) =>
    signIn
      ? css`
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
      : createAccount
      ? css`
          width: 29rem;
          height: 7.2rem;
          color: ${({ theme }) => theme.colors.primary};
          background: ${({ theme }) => theme.colors.tertiary};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          font-weight: 600;
          border-radius: 2.4rem;
          transition: all 0.2s ease-in-out;

          :hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.tertiary};
            border: 1px solid ${({ theme }) => theme.colors.tertiary};
            transform: translateY(-2px) scale(1.01);
          }

          :active {
            transform: translateY(0) scale(1);
          }
        `
      : pocketMoney
      ? css`
          width: 26rem;
          height: 5.6rem;
          background-color: ${({ theme }) => theme.colors.tertiary};
          color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          font-weight: 600;
          border-radius: 2.4rem;
          text-align: right;
          padding-right: 4.5rem;
          transition: all 0.2s ease-in-out;

          :hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.tertiary};
            border: 1px solid ${({ theme }) => theme.colors.tertiary};
            transform: translateY(-2px) scale(1.01);
            padding-right: 5.5rem;
          }

          :active {
            transform: translateY(0) scale(1);
          }
        `
      : authButton
      ? css`
          width: 44rem;
          height: 5.6rem;
          justify-content: flex-end;
          align-items: center;
          flex-shrink: 0;

          border-radius: 0.8rem;
          border: 1px solid ${({ theme }) => theme.colors.tertiary};
          background: ${({ theme }) => theme.colors.tertiary};
          color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        `
      : css``}
`;

export { CustomButton };
