import { FC } from "react";

import Image from "next/image";

import {
  MobileStyles,
  MobileImage,
  MobileInfo,
  MobileHeader,
  MobileDescription,
  AppLogo,
  BankImage,
} from "./Mobile.styles";

import iPhone from "./image/iPhone.png";
import AppStore from "./image/AppStore.png";
import PlayStore from "./image/PlayStore.png";
import Bank from "./image/Bank.png";

const Mobile: FC = () => {
  return (
    <MobileStyles>
      <MobileImage>
        <Image src={iPhone} width={304} height={630} alt="iPhone" />
      </MobileImage>
      <MobileInfo>
        <MobileHeader>Download Our Mobile App Now</MobileHeader>
        <MobileDescription>
          Cursus elit magna vestibulum nibh ullamcorper condimentum vestibulum
          id. Diam sed orci donec ultrices risus nibh massa pharetra.
        </MobileDescription>
        <AppLogo appStore>
          <Image
          src={AppStore}
          width={270}
          height={77}
          alt="App Store Logo"
          />
        </AppLogo>
        <AppLogo playStore>
          <Image
            src={PlayStore}
            width={270}
            height={77}
            alt="Play Store Logo"
          />
        </AppLogo>
      </MobileInfo>
      <BankImage>
        <Image src={Bank} width={324} height={429} alt="Bank" />
      </BankImage>
    </MobileStyles>
  );
};

export default Mobile;
