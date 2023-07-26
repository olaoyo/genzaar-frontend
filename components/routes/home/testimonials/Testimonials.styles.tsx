import styled from "styled-components";

const TestimonialsStyles = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  justify-items: center;
  row-gap: 2rem;
  padding-top: 30rem;
`;

const TestimonialsHeader = styled.h6`
  grid-row: 1 / span 1;

  color: ${({ theme }) => theme.colors.grey.one};
  font-size: ${({ theme }) => theme.fontSizes.headers.h6};
`;

const TestimonailsParagraph = styled.p`
  grid-row: 2 / span 1;

  color: ${({ theme }) => theme.colors.grey.five};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
`;

const TestimonialsCards = styled.div`
  grid-row: 3 / span 1;

  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 4rem;
  padding: 20rem 0 20rem 0;
`;

export {
  TestimonialsStyles,
  TestimonialsHeader,
  TestimonailsParagraph,
  TestimonialsCards,
};
