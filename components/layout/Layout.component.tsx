import { ReactNode } from "react";
import LayoutStyles from "./Layout.styles";
import HeaderNavigation from "../navigation/header/HeaderNavigation";
import FooterNavigation from "../navigation/footer/FooterNavigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyles>
      <HeaderNavigation />
      {children}
      <FooterNavigation />
    </LayoutStyles>
  );
};

export default Layout;
