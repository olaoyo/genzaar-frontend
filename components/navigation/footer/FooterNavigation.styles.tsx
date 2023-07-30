import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 3rem;
  width: 172.8rem;
  height: 41.2rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 13rem 0 10rem 0;
  z-index: -1;
`;

const FooterLinksContainer = styled.div`
  grid-row: 1 / span 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterLinksGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-self: center;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.grey.one};
  }
`;

const FooterText = styled.p`
  grid-row: 2 / span 1;
  justify-self: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  font-weight: 500;
`;

export {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksGrid,
  FooterLink,
  FooterText,
};
