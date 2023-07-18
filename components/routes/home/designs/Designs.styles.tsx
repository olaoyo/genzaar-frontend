import styled, { css } from "styled-components";

const DesignsStyles = styled.section`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 10rem;
`;

const DesignsImage = styled.div<{
  dots?: boolean;
  playStation?: boolean;
  cross?: boolean;
  circle?: boolean;
}>`
  ${({ dots, playStation, cross, circle }) =>
    dots
      ? css`
          grid-column: 1 / span 1;
          grid-row: 1 / span 1;
          margin-left: -12.5rem;
        `
      : playStation
      ? css`
          grid-column: 1 / span 1;
          grid-row: 2 / span 1;
          margin-top: -20rem;
        `
      : cross
      ? css`
          grid-column: 2 / span 1;
          grid-row: 1 / span 1;
          justify-self: end;
          margin-top: -20rem;
          z-index: 5;
        `
      : circle
      ? css`
          grid-column: 2 / span 1;
          grid-row: 2 / span 1;
          justify-self: end;
          margin-top: -20rem;
        `
      : css``}
`;

export { DesignsStyles, DesignsImage };
