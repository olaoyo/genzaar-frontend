import { FC } from "react";

import Head from "next/head";

import { Logo, LogoLink, NavItems, NavItem } from "./HeaderNavigation.styles";
import { CustomButton as SignInButton } from "../../buttons/Buttons";

const HeaderNavigation: FC = () => {
  return (
    <>
      <Head>
        <title>Genzaar | Home</title>
      </Head>
      <LogoLink href="/">
        <Logo
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
      <SignInButton signIn>Sign In</SignInButton>
    </>
  );
};

export default HeaderNavigation;
