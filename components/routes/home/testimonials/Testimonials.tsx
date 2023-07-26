import { FC } from "react";

import { StaticImageData } from "next/image";

import {
  TestimonialsStyles,
  TestimonialsHeader,
  TestimonailsParagraph,
  TestimonialsCards,
} from "./Testimonials.styles";

import Testimonial from "../../../cards/testimonial/Testimonial";

const Testimonial01: StaticImageData = require("./image/Testimonial01.png");
const Testimonial02: StaticImageData = require("./image/Testimonial02.png");
const Testimonial03: StaticImageData = require("./image/Testimonial03.png");


const Testimonials: FC = () => {
  return (
    <TestimonialsStyles>
      <TestimonialsHeader>
        Orci est non urna quam sit feugiat. Consectetur viverra amet
      </TestimonialsHeader>
      <TestimonailsParagraph>
        Cursus elit magna vestibulum nibh ullamcorper condimentum vestibulum id.
        Diam sed orci donec ultrices risus nibh massa pharetra.
      </TestimonailsParagraph>
      <TestimonialsCards>
        <Testimonial
          image={Testimonial01}
          alt="Picture of Kim Wexler"
          name="Kim Wexler"
          description="Elit elementum fermentum ipsum nunc lacus a sit egestas. Sit dolor vulputate varius rhoncus quis. Viverra orci odio eget enim purus suspendisse tellus scelerisque. Elit mauris consequat amet nulla."
          date="25 jan 2023"
          time="09:55am"
        />
        <Testimonial
          image={Testimonial02}
          alt="Picture of Jessie Pinkman"
          name="Jessie Pinkman"
          description="Elit elementum fermentum ipsum nunc lacus a sit egestas. Sit dolor vulputate varius rhoncus quis. Viverra orci odio eget enim purus suspendisse tellus scelerisque. Elit mauris consequat amet nulla."
          date="22 feb 2023"
          time="10:55am"
        />
        <Testimonial
          image={Testimonial03}
          alt="Picture of Tuco Salamanca"
          name="Tuco Salamanca"
          description="Elit elementum fermentum ipsum nunc lacus a sit egestas. Sit dolor vulputate varius rhoncus quis. Viverra orci odio eget enim purus suspendisse tellus scelerisque. Elit mauris consequat amet nulla."
          date="12 jun 2023"
          time="09:55pm"
        />
      </TestimonialsCards>
    </TestimonialsStyles>
  );
};

export default Testimonials;
