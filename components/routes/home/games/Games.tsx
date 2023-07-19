import { FC } from "react";

import Image from "next/image";

import {
  GamesStyles,
  GameImage,
  GamesInfoContainer,
  GamesTitle,
  GamesDescription,
  GamesContainer,
  GamePlay,
} from "./Games.styles";

import Pills from "./image/Pills.png";
import Xbox from "./image/Xbox.png";
import Explorer from "./image/Explorer.png";
import GamePad from "./image/GamePad.png";
import Play from "./image/Play.png";
import SpaceMan from "./image/SpaceMan.png";

const Games: FC = () => {
  return (
    <GamesStyles>
      <GameImage pills>
        <Image src={Pills} width={307} height={451} alt="Pills" />
      </GameImage>
      <GamesInfoContainer>
        <GamesTitle header>Try Some Of Our Games</GamesTitle>
        <GamesDescription>
          Cursus elit magna vestibulum nibh ullamcorper condimentum vestibulum
          id. Diam sed orci donec ultrices risus nibh massa pharetra.
        </GamesDescription>
        <GamesContainer>
          <GamePlay>
            <Image
              src={Explorer}
              width={256}
              height={256}
              alt="Explorer Game"
            />
            <GamesTitle gameTitle>Explorer</GamesTitle>
          </GamePlay>
          <GamePlay>
            <Image src={GamePad} width={256} height={256} alt="GamePad Game" />
            <GamesTitle gameTitle>GamePad</GamesTitle>
          </GamePlay>
          <GamePlay>
            <Image src={Play} width={256} height={256} alt="Explorer Game" />
            <GamesTitle gameTitle>Play</GamesTitle>
          </GamePlay>
          <GamePlay>
            <Image
              src={SpaceMan}
              width={256}
              height={256}
              alt="Explorer Game"
            />
            <GamesTitle gameTitle>Space Man</GamesTitle>
          </GamePlay>
        </GamesContainer>
      </GamesInfoContainer>
      <GameImage xbox>
        <Image src={Xbox} width={340} height={404} alt="Xbox" />
      </GameImage>
    </GamesStyles>
  );
};

export default Games;
