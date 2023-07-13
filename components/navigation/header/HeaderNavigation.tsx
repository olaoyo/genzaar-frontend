import { FC } from "react";

import Head from "next/head";
import Image from "next/image";

import { LogoLink, NavItems, NavItem, ButtonContainer } from "./HeaderNavigation.styles";
import { CustomButton as SignInButton } from "../../buttons/Buttons";

const HeaderNavigation: FC = () => {
  return (
    <>
      <Head>
        <title>Genzaar | Home</title>
      </Head>
      <LogoLink href="/">
        <Image
          src="img/genzaar-logo.svg"
          width={173}
          height={36}
          alt="Genzaar Logo"
        />
      </LogoLink>
      <NavItems>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/">Savings</NavItem>
        <NavItem href="/">Transfer</NavItem>
        <NavItem href="/">Investment</NavItem>
        <NavItem href="/">About</NavItem>
      </NavItems>
      <ButtonContainer>
        <SignInButton signIn>Sign In</SignInButton>
      </ButtonContainer>
    </>
  );
};

export default HeaderNavigation;
