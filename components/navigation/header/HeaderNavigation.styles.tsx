import styled from "styled-components";
import Link from "next/link";

const LogoLink = styled(Link)`
  grid-column: 2 / span 2;
  margin: 3.8rem 0 3.8rem -3.5rem;
`;

const NavItems = styled.div`
  grid-column: 4 / span 6;

  display: grid;
  width: 69.8rem;
  height: 2.4rem;
  grid-template-columns: repeat(5, auto);
  column-gap: 8rem;
  justify-items: center;
  align-self: center;
  margin: 0 0 0 8rem;
`;

const NavItem = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.grey.four};
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.grey.one};
  }
`;

const ButtonContainer = styled(Link)`
  grid-column: 11 / span 1;
  justify-self: end;
  align-self: center;
  margin-right: -3.5rem;
`;

export { LogoLink, NavItems, NavItem, ButtonContainer };
