import { ReactNode } from "react";
import LayoutStyles from "./Layout.styles";

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyles>{children}</LayoutStyles>
  )
}

export default Layout