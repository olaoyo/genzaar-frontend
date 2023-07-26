import styled from "styled-components";

const TestimonialCard = styled.article`
  display: grid;

  grid-template-columns: max-content 1fr;
  width: 45.8rem;
  height: 27.2rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.25);
`;

const TestimonialImageGrid = styled.div`
  grid-column: 1 / span 1;

  padding: 2.4rem;
`;

const TestimonialImage = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.grey.one};
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 6.8rem;
  overflow: hidden;
`;

const TestimonialInfo = styled.div`
  grid-column: 2 / span 1;
  row-gap: 2rem;

  display: grid;
  grid-template-rows: repeat(3, min-content);
  padding: 2.4rem 3.4rem 0 0;
`;

const TestimonialName = styled.p`
  grid-row: 1 / span 1;

  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p3 || "2.0rem"};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 600;
`;

const TestimonialDescription = styled.p`
  grid-row: 2 / span 1;

  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4 || "1.6rem"};
  color: ${({ theme }) => theme.colors.grey.five};
`;

const TestimonialDateTime = styled.div`
  grid-row: 3 / span 1;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 7rem;
  justify-self: end;
`;

const TestimonialDateTimeText = styled.p`
  color: ${({ theme }) => theme.colors.grey.five};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4 || "1.6rem"};
  font-style: italic;
  font-weight: 500;
  line-height: normal;
`;

export {
  TestimonialCard,
  TestimonialImageGrid,
  TestimonialImage,
  TestimonialInfo,
  TestimonialName,
  TestimonialDescription,
  TestimonialDateTime,
  TestimonialDateTimeText,
};
