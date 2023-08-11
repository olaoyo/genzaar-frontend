import { FC } from "react";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksGrid,
  FooterLink,
  FooterText,
} from "./FooterNavigation.styles";

const FooterNavigation: FC = () => {

  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


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
        Today is {`${dayName[day]}`}, {`${monthName[month]}`} {day}, {year}. Hope Genzaar helped your financial goals.
      </FooterText>
    </FooterContainer>
  );
};

export default FooterNavigation;
