import { ReactElement } from "react";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import Header from "./Header";
// import ComingSoon from 'pages/comingsoon';

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth={false} disableGutters>
      {/* <ComingSoon /> */}
      <Header />
      {children}
      <Footer />
     
    </Container>
  );
}
