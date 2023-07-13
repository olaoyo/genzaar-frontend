import styled, { css } from "styled-components";

const PocketMoneyStyles = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 15rem;
`;

const CtaContainer = styled.div`
  grid-column: 2 / span 5;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2.4rem;
  align-self: center;
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

const ImgAndCardContainer = styled.div`
  grid-column: 7 / span 5;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CardContainer = styled.div<{
  card1?: boolean;
  card2?: boolean;
  card3?: boolean;
}>`
  ${({ card1, card2, card3 }) =>
    card1
      ? css`
          grid-column: 1 / span 1;
          align-self: center;
          padding-bottom: 4rem;
          z-index: 3;
        `
      : card2
      ? css`
          grid-column: 3 / span 1;
          align-self: start;
          padding-top: 15rem;
          margin-left: -7rem;
          z-index: 1;
        `
      : card3
      ? css`
          grid-column: 4 / span 1;
          align-self: end;
          padding-bottom: 7.5rem;
          margin-left: -39rem;
          z-index: 3;
        `
      : css``}
`;

const PocketMoneyImage = styled.div<{ girl05?: boolean }>`
  ${({ girl05 }) =>
    girl05
      ? css`
          grid-column: 2 / span 1;
          margin-left: -10.5rem;
          z-index: 2;
        `
      : css``}
`;

export {
  PocketMoneyStyles,
  CtaContainer,
  CtaHeader,
  CtaParagraph,
  ButtonContainer,
  ImgAndCardContainer,
  CardContainer,
  PocketMoneyImage,
};
