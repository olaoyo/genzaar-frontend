import { FC, useState } from "react";

import {
  LoginFormContainer,
  LoginFormLeft,
  LoginFormMiddle,
  LoginFormRight,
  LoginText,
  LabelAndInput,
  TermsAndConditionsAndForgotPassword,
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

import routes from "../../../../paths/routes/routes";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginFormContainer>
      <LoginFormLeft></LoginFormLeft>
      <LoginFormMiddle>
        <LoginCard auth>
          <LoginText header>Log In</LoginText>
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
          <TermsAndConditionsAndForgotPassword>
            <TermsAndConditions>
              <Checkbox type="checkbox" />
              <LoginText terms>Remember me</LoginText>
            </TermsAndConditions>
            <LoginText forgotPassword>Forgot Password?</LoginText>
          </TermsAndConditionsAndForgotPassword>
          <LoginButton authButton>Log In</LoginButton>
          <LoginText terms>
            Don't have an account?&nbsp;
            <LoginLink href={routes.auth.register}>
              <span>Create One</span>
            </LoginLink>
          </LoginText>
        </LoginCard>
      </LoginFormMiddle>
      <LoginFormRight></LoginFormRight>
    </LoginFormContainer>
  );
};

export default LoginForm;
