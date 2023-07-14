import { FC } from "react";

import Image from "next/image";

import {
  VaultStyles,
  ImgAndCardContainer,
  CardContainer,
  VaultImage,
  CtaContainer,
  CtaHeader,
  CtaParagraph,
  ButtonContainer,
} from "./Vault.styles";

import { CustomButton as VaultButton } from "../../../buttons/Buttons";
import { CustomCard as VaultCard } from "../../../cards/Cards";

import VaultImg from "./image/VaultImage.png";

const Vault: FC = () => {
  return (
    <VaultStyles>
      <ImgAndCardContainer>
        <CardContainer card1>
          <VaultCard vault01>Pulvinar elit dignissim dui urna purus.</VaultCard>
        </CardContainer>
        <CardContainer card2>
          <VaultCard vault02>Pulvinar elit dignissim dui urna purus.</VaultCard>
        </CardContainer>
        <VaultImage vault>
          <Image src={VaultImg} width={524.5} height={567} alt="Vault" />
        </VaultImage>
      </ImgAndCardContainer>
      <CtaContainer>
        <CtaHeader>Sed arcu adipiscing eget proin.</CtaHeader>
        <CtaParagraph>
          Cursus elit magna vestibulum nibh ullamcorper condimentum vestibulum
          id. Diam sed orci donec ultrices risus nibh massa pharetra.
        </CtaParagraph>
        <ButtonContainer>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          <VaultButton pocketMoney>Vault Savings</VaultButton>
        </ButtonContainer>
      </CtaContainer>
    </VaultStyles>
  );
};

export default Vault;
