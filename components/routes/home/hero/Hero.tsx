import { FC } from "react";

import Image from "next/image";

import {
  HeroStyles,
  Header,
  Details,
  HeroImageContainer,
  HeroImage,
} from "./Hero.styles";
import { CustomButton as CreateAnAccountButton } from "../../../buttons/Buttons";

import Girl03 from "./image/Girl03.png";
import Girl04 from "./image/Girl04.png";
import CoinBig01 from "./image/CoinBig01.png";
import CoinBig02 from "./image/CoinBig02.png";
import CoinSmall01 from "./image/CoinSmall01.png";
import CoinSmall02 from "./image/CoinSmall02.png";

const Hero: FC = () => {
  return (
    <HeroStyles>
      <Header>Orci est non urna quam nullam </Header>
      <Details>
        Cursus elit magna vestibulum nibh ullamcorper condimentum vestibulum id.
        Diam sed orci{" "}
      </Details>
      <CreateAnAccountButton createAccount>
        Create an Account
      </CreateAnAccountButton>
      <HeroImageContainer>
        <HeroImage girl03>
          <Image src={Girl03} width={308} height={429} alt="Baby Girl" />
        </HeroImage>
        <HeroImage coinBig01>
          <Image src={CoinBig01} width={114.01} height={111.05} alt="Big Coin" />
        </HeroImage>
        <HeroImage coinSmall01>
          <Image src={CoinSmall01} width={57.2} height={48.29} alt="Small Coin" />
        </HeroImage>
        <HeroImage coinSmall02>
          <Image src={CoinSmall02} width={52.58} height={37.58} alt="Small Coin" />
        </HeroImage>
        <HeroImage coinBig02>
          <Image src={CoinBig02} width={108.39} height={127.18} alt="Big Coin" />
        </HeroImage>
        <HeroImage girl04>
          <Image src={Girl04} width={230} height={668} alt="Toodler Girl" />
        </HeroImage>
      </HeroImageContainer>
    </HeroStyles>
  );
};

export default Hero;
