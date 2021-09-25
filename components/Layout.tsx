import { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
