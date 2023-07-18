import { FC } from "react";

import Image from "next/image";

import { DesignsStyles, DesignsImage } from "./Designs.styles";
import Dots from "./image/Dots.png";
import PlayStation from "./image/PlayStation.png";
import Cross from "./image/Cross.png";
import Circle from "./image/Circle.png";

const Designs: FC = () => {
  return (
    <DesignsStyles>
      <DesignsImage dots>
        <Image src={Dots} width={469} height={469} alt="Dots" />
      </DesignsImage>
      <DesignsImage playStation>
        <Image src={PlayStation} width={629} height={308} alt="PlayStation" />
      </DesignsImage>
      <DesignsImage cross>
        <Image src={Cross} width={247} height={247} alt="Cross" />
      </DesignsImage>
      <DesignsImage circle>
        <Image src={Circle} width={195} height={552} alt="Circle" />
      </DesignsImage>
    </DesignsStyles>
  );
};

export default Designs;
