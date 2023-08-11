import styled, { css } from "styled-components";
import Link from "next/link";

const HeroStyles = styled.div`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  row-gap: 4rem;
  justify-items: center;
`;

const Header = styled.h2`
  grid-row: 1 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey.one};
`;

const Details = styled.p`
  grid-row: 2 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.five};
  text-align: center;
  width: 53.7rem;
  height: auto;
`;

const HeroImageContainer = styled.div`
  grid-row: 4 / span 1;
  display: grid;
  grid-template-columns: repeat(12, 13rem);
`;

const HeroImage = styled.div<{
  girl03?: boolean;
  girl04?: boolean;
  coinBig01?: boolean;
  coinBig02?: boolean;
  coinSmall01?: boolean;
  coinSmall02?: boolean;
}>`
  ${({ girl03, girl04, coinBig01, coinBig02, coinSmall01, coinSmall02 }) =>
    girl03
      ? css`
          grid-column: 2 / span 1;
          margin-left: -5.5rem;
        `
      : girl04
      ? css`
          grid-column: 11 / span 1;
          margin-right: 4rem;
        `
      : coinBig01
      ? css`
          grid-column: 3 / span 1;
          align-self: start;
          margin-top: -10rem;
        `
      : coinBig02
      ? css`
          grid-column: 10 / span 1;
          align-self: center;
        `
      : coinSmall01
      ? css`
          grid-column: 5 / span 1;
          align-self: center;
          margin-top: -5rem;
        `
      : coinSmall02
      ? css`
          grid-column: 9 / span 1;
          margin-top: -15rem;
        `
      : css``}
`;

const ButtonContainer = styled(Link)`
  grid-row: 3 / span 1;
`

export { HeroStyles, Header, Details, HeroImageContainer, HeroImage, ButtonContainer };
