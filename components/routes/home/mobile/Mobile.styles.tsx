import styled, { css } from "styled-components";

const MobileStyles = styled.div`
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 6rem;
`;

const MobileImage = styled.div`
  grid-column: 1 / span 1;

  justify-self: end;
  margin-bottom: -10rem;
`;

const MobileInfo = styled.div`
  grid-column: 2 / span 1;

  display: grid;
  grid-template-rows: repeat(4, max-content);
  row-gap: 2rem;
  justify-self: end;
  align-self: self-end;
  padding: 0 0 4rem 0;
`;

const MobileHeader = styled.h5`
  grid-row: 1 / span 1;

  color: ${({ theme }) => theme.colors.grey.one};
  font-size: ${({ theme}) => theme.fontSizes.headers.h5};
  line-height: normal;
`;

const MobileDescription = styled.p`
  grid-row: 2 / span 1;

  color: ${({ theme }) => theme.colors.grey.five};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
`;

const AppLogo = styled.div<{ appStore?: boolean; playStore?: boolean }>`
  ${({ appStore, playStore }) =>
    appStore
      ? css`
          grid-row: 3 / span 1;
        `
      : playStore
      ? css`
          grid-row: 4 / span 1;
        `
      : css``}
`;

const BankImage = styled.div`
  grid-column: 3 / span 1;

  justify-self: end;
`;

export {
  MobileStyles,
  MobileImage,
  MobileInfo,
  MobileHeader,
  MobileDescription,
  AppLogo,
  BankImage,
};
