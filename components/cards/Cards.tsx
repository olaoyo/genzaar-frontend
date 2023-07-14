import styled, { css } from "styled-components";

const CustomCard = styled.article<{
  pocketMoney?: boolean;
  vault01?: boolean;
  vault02?: boolean;
}>`
  ${({ pocketMoney, vault01, vault02 }) =>
    pocketMoney
      ? css`
          width: 32rem;
          height: 8.8rem;
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);
          padding: 1rem 2rem 1rem 5rem;
          justify-self: center;
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          font-weight: 500;
          color: ${({ theme }) => theme.colors.grey.three};
        `
      : vault01
      ? css`
          width: 29.1rem;
          height: 9.4rem;
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);
          padding: 1.5rem 2rem 1rem 5rem;
          justify-items: center;
          align-items: center;
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          font-weight: 500;
          color: ${({ theme }) => theme.colors.tertiary};
        `
      : vault02
      ? css`
          width: 26.8rem;
          height: 10.1rem;
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);
          padding: 2rem 2rem 1rem 4rem;
          justify-items: center;
          align-items: center;
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3};
          font-weight: 500;
          color: ${({ theme }) => theme.colors.tertiary};
        `
      : css``}
`;

export { CustomCard };
