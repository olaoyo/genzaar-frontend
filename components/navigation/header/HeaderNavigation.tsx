import { FC } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import {
  LogoLink,
  NavItems,
  NavItem,
  ButtonContainer,
} from "./HeaderNavigation.styles";
import { CustomButton as SignInButton } from "../../buttons/Buttons";

const Logo: StaticImageData = require("./image/genzaar-logo.svg")

import routes from "../../../paths/routes/routes";

const HeaderNavigation: FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Genzaar | Navigation</title>
      </Head>
      <LogoLink href={routes.home}>
        <Image
          src={Logo}
          width={173}
          height={36}
          alt="Genzaar Logo"
        />
      </LogoLink>
      <NavItems>
        <NavItem href={routes.home}>Home</NavItem>
        <NavItem href="/">Savings</NavItem>
        <NavItem href="/">Transfer</NavItem>
        <NavItem href="/">Investment</NavItem>
        <NavItem href="/">About</NavItem>
      </NavItems>
      <ButtonContainer href={routes.auth.login}>
        {/* Conditionally render the Sign In button on the auth form */}
        {router.pathname === routes.home ? (
          <SignInButton signIn>Sign In</SignInButton>
        ) : (
          ""
        )}
      </ButtonContainer>
    </>
  );
};

export default HeaderNavigation;
