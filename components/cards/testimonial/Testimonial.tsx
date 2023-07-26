import { FC } from "react";

import Image, { StaticImageData } from "next/image";

import {
  TestimonialCard,
  TestimonialImageGrid,
  TestimonialImage,
  TestimonialInfo,
  TestimonialName,
  TestimonialDescription,
  TestimonialDateTime,
  TestimonialDateTimeText,
} from "./Testimonial.styles";

interface TestimonialProps {
  image: StaticImageData;
  alt: string;
  name: string;
  description: string;
  date: string;
  time: string;
}

const Testimonial: FC<TestimonialProps> = ({
  image,
  alt,
  name,
  description,
  date,
  time,
}) => {
  return (
    <TestimonialCard>
      <TestimonialImageGrid>
        <TestimonialImage>
          <Image src={image} width={68} height={68} alt={alt} />
        </TestimonialImage>
      </TestimonialImageGrid>
      <TestimonialInfo>
        <TestimonialName>{name}</TestimonialName>
        <TestimonialDescription>{description}</TestimonialDescription>
        <TestimonialDateTime>
          <TestimonialDateTimeText>{date}</TestimonialDateTimeText>
          <TestimonialDateTimeText>{time}</TestimonialDateTimeText>
        </TestimonialDateTime>
      </TestimonialInfo>
    </TestimonialCard>
  );
};

export default Testimonial;
