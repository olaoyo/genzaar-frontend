import styled, { css } from "styled-components";

const GamesStyles = styled.section`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: max-content 1fr max-content;
  width: auto;
  height: 106.2rem;
  background: ${({ theme }) => theme.colors.purple};
  margin-top: -50rem;
  z-index: -1;
`;

const GameImage = styled.div<{ pills?: boolean; xbox?: boolean }>`
  ${({ pills, xbox }) =>
    pills
      ? css`
          grid-column: 1 / span 1;
          align-self: end;
          margin-bottom: -30rem;
        `
      : xbox
      ? css`
          grid-column: 3 / span 1;
          justify-self: end;
          align-self: end;
          margin-bottom: -13rem;
        `
      : css``}
`;

const GamesInfoContainer = styled.div`
  grid-column: 2 / span 1;

  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 4rem;
  justify-items: center;
  align-self: center;
`;

const GamesTitle = styled.h6<{
  header?: boolean;
  gameTitle?: boolean;
}>`
  ${({ header, gameTitle }) =>
    header
      ? css`
          grid-row: 1 / span 1;

          color: ${({ theme }) => theme.colors.grey.one};
          font-size: ${({ theme }) => theme.fontSizes.headers.h6};
          font-weight: 600;
        `
      : gameTitle
      ? css`
          color: ${({ theme }) => theme.colors.grey.one};
          text-align: center;
          font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
          font-weight: 500;
        `
      : css``}
`;
const GamesDescription = styled.p`
  grid-row: 2 / span 1;

  color: ${({ theme }) => theme.colors.grey.one};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
`;

const GamesContainer = styled.div`
  grid-row: 3 / span 1;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
`;

const GamePlay = styled.article`
  display: grid;

  grid-template-rows: repeat(2, max-content);
  justify-content: center;
  align-items: center;
`;

export {
  GamesStyles,
  GameImage,
  GamesInfoContainer,
  GamesTitle,
  GamesDescription,
  GamesContainer,
  GamePlay,
};
