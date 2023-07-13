import { FC } from "react";

import Image from "next/image";

import {
  PocketMoneyStyles,
  CtaContainer,
  CtaHeader,
  CtaParagraph,
  ButtonContainer,
  ImgAndCardContainer,
  CardContainer,
  PocketMoneyImage,
} from "./PocketMoney.styles";

import { CustomButton as PocketMoneyButton } from "../../../buttons/Buttons";
import { CustomCard as PocketMoneyCard } from "../../../cards/Cards";

import Girl05 from "./image/Girl05.png";

const PocketMoney: FC = () => {
  return (
    <PocketMoneyStyles>
      <CtaContainer>
        <CtaHeader>Sed arcu adipiscing eget proin.</CtaHeader>
        <CtaParagraph>
          Cursus elit magna vestibulum nibh ullamcorper condimentum vestibulum
          id. Diam sed orci donec ultrices risus nibh massa pharetra.
        </CtaParagraph>
        <ButtonContainer>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          <PocketMoneyButton pocketMoney>Pocket Money</PocketMoneyButton>
        </ButtonContainer>
      </CtaContainer>
      <ImgAndCardContainer>
        <CardContainer card1>
          <PocketMoneyCard pocketMoney>
            Placerat augue vel leo elementum
          </PocketMoneyCard>
        </CardContainer>
        <PocketMoneyImage girl05>
          <Image src={Girl05} width={234} height={715} alt="Young Girl" />
        </PocketMoneyImage>
        <CardContainer card2>
          <PocketMoneyCard pocketMoney>
            Pulvinar elit dignissim dui urna purus.
          </PocketMoneyCard>
        </CardContainer>
        <CardContainer card3>
          <PocketMoneyCard pocketMoney>
            Pulvinar elit dignissim dui urna purus.
          </PocketMoneyCard>
        </CardContainer>
      </ImgAndCardContainer>
    </PocketMoneyStyles>
  );
};

export default PocketMoney;
