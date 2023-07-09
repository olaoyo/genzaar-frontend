import styled from "styled-components";

const InfoStyles = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 4rem;
  justify-self: center;
  text-align: center;
  margin-top: -10rem;
`;

const InfoHeader = styled.h4`
  grid-row: 1 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  color: ${({ theme }) => theme.colors.grey.three};
`;

const InfoParagraph = styled.p`
  grid-row: 2 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.five};
`;

export { InfoStyles, InfoHeader, InfoParagraph };
