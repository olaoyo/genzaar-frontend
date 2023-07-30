import { FC } from "react";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksGrid,
  FooterLink,
  FooterText,
} from "./FooterNavigation.styles";

const FooterNavigation: FC = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksGrid>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
        </FooterLinksGrid>
        <FooterLinksGrid>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
        </FooterLinksGrid>
        <FooterLinksGrid>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
          <FooterLink href="/">In et vestibulum eu </FooterLink>
        </FooterLinksGrid>
      </FooterLinksContainer>
      <FooterText>
        In et vestibulum eu faucibus arcu ornare accumsan quam. Tellus amet
        integer orci nullam erat enim morbi sed.
      </FooterText>
    </FooterContainer>
  );
};

export default FooterNavigation;
