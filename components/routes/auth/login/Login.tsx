import { FC, useState } from "react";

import Image, { StaticImageData } from "next/image";

import {
  LoginFormContainer,
  LoginFormLeft,
  LoginHeader,
  LoginText,
  LoginImage,
  LoginFormRight,
  LabelAndInput,
  TermsAndConditions,
  Checkbox,
  LoginLink,
} from "./Login.styles";

import { CustomCard as LoginCard } from "../../../cards/Cards";
import {
  CustomInput as LoginInput,
  Label as LoginLabel,
} from "../../../inputs/Inputs";
import { CustomButton as LoginButton } from "../../../buttons/Buttons";

const Piggy: StaticImageData = require("./image/Piggy.png");

import routes from "../../../../paths/routes/routes";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginFormContainer>
      <LoginFormLeft>
        <LoginHeader>
          The most Trusted and Reliable Online Banking Platform.
        </LoginHeader>
        <LoginText paragraph>Trusted by 5 Million+ Users Nationwide</LoginText>
        <LoginImage>
          <Image src={Piggy} width={559} height={563} alt="Piggy" />
        </LoginImage>
      </LoginFormLeft>

      <LoginFormRight>
        <LoginCard auth>
          <LoginText header>Create An Account</LoginText>
          <LabelAndInput>
            <LoginLabel>Email</LoginLabel>
            <LoginInput
              authText
              type="email"
              placeholder="hello@genzaar.app"
              value={email}
              onChange={(email) => setEmail(email.target.value)}
              required
            />
          </LabelAndInput>
          <LabelAndInput>
            <LoginLabel>Password</LoginLabel>
            <LoginInput
              authText
              type="password"
              placeholder="We promise not to peek 👀"
              value={password}
              onChange={(password) => setPassword(password.target.value)}
              required
            />
          </LabelAndInput>
          <TermsAndConditions>
            <Checkbox type="checkbox" />
            <LoginText terms>Agree with our terms and conditions?</LoginText>
          </TermsAndConditions>
          <LoginButton authButton>Sign Up</LoginButton>
          <LoginText terms>
            I’m already a member?
            <LoginLink href={routes.auth.login}>
              <span>Log In</span>
            </LoginLink>
          </LoginText>
        </LoginCard>
      </LoginFormRight>
    </LoginFormContainer>
  );
};

export default LoginForm;
