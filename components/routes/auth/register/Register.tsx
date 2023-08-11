import { FC, useState } from "react";

import Image, { StaticImageData } from "next/image";

import {
  RegisterFormContainer,
  RegisterFormLeft,
  RegisterHeader,
  RegisterText,
  RegisterImage,
  RegisterFormRight,
  LabelAndInput,
  TermsAndConditions,
  Checkbox,
  RegisterLink,
} from "./Register.styles";

import { CustomCard as RegisterCard } from "../../../cards/Cards";
import {
  CustomInput as RegisterInput,
  Label as RegisterLabel,
} from "../../../inputs/Inputs";
import { CustomButton as RegisterButton } from "../../../buttons/Buttons";

const Piggy: StaticImageData = require("./image/Piggy.png");

import routes from "../../../../paths/routes/routes";

const RegisterForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RegisterFormContainer>
      <RegisterFormLeft>
        <RegisterHeader>
          The most Trusted and Reliable Online Banking Platform.
        </RegisterHeader>
        <RegisterText paragraph>Trusted by 5 Million+ Users Nationwide</RegisterText>
        <RegisterImage>
          <Image src={Piggy} width={559} height={563} alt="Piggy" />
        </RegisterImage>
      </RegisterFormLeft>

      <RegisterFormRight>
        <RegisterCard auth>
          <RegisterText header>Create An Account</RegisterText>
          <LabelAndInput>
            <RegisterLabel>Email</RegisterLabel>
            <RegisterInput
              authText
              type="email"
              placeholder="hello@genzaar.app"
              value={email}
              onChange={(email) => setEmail(email.target.value)}
              required
            />
          </LabelAndInput>
          <LabelAndInput>
            <RegisterLabel>Password</RegisterLabel>
            <RegisterInput
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
            <RegisterText terms>Agree with our terms and conditions?</RegisterText>
          </TermsAndConditions>
          <RegisterButton authButton>Sign Up</RegisterButton>
          <RegisterText terms>
            I’m already a member?&nbsp;
            <RegisterLink href={routes.auth.login}>
              <span>Log In</span>
            </RegisterLink>
          </RegisterText>
        </RegisterCard>
      </RegisterFormRight>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
