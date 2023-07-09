import { FC } from "react";

import { InfoStyles, InfoHeader, InfoParagraph } from "./Info.styles";

const Info: FC = () => {
  return (
    <InfoStyles>
      <InfoHeader>What is Genzaar?</InfoHeader>
      <InfoParagraph>
        Genzaar is a platform for young adults to learn about financial literacy to guide their future 😍💰
      </InfoParagraph>
    </InfoStyles>
  );
};

export default Info;
