import styled, { css } from "styled-components";

const VaultStyles = styled.section`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 10rem 0 0 0;
`;

const ImgAndCardContainer = styled.div`
  grid-column: 2 / span 5;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CardContainer = styled.div<{
  card1?: boolean;
  card2?: boolean;
}>`
  ${({ card1, card2 }) =>
    card1
      ? css`
          grid-column: 1 / span 1;
          align-self: end;
          padding: 0 0 13rem 4rem;
          z-index: 3;
        `
      : card2
      ? css`
          grid-column: 2 / span 1;
          align-self: start;
          padding: 4rem 0 0 0;
          margin: 0 0 0 -27rem;
          z-index: 3;
        `
      : css``}
`;

const VaultImage = styled.div<{ vault?: boolean }>`
  ${({ vault }) =>
    vault
      ? css`
          grid-column: 3 / span 1;
          margin-left: -15rem;
          z-index: 2;
        `
      : css``}
`;

const CtaContainer = styled.div`
  grid-column: 7 / span 5;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2.4rem;
  justify-self: center;
  align-self: center;
  padding: 0 0 0 9rem;
`;

const CtaHeader = styled.h4`
  grid-row: 1 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey.one};
`;

const CtaParagraph = styled.p`
  grid-row: 2 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.five};
`;

const ButtonContainer = styled.div`
  grid-row: 3 / span 1;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  margin-left: 4rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
    margin-right: -10rem;
    padding-left: 4rem;
    z-index: 2;
    transition: all 0.2s ease-in-out;
  }
`;

export {
  VaultStyles,
  ImgAndCardContainer,
  CardContainer,
  VaultImage,
  CtaContainer,
  CtaHeader,
  CtaParagraph,
  ButtonContainer,
};
