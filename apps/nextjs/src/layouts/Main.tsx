import { Container } from "@acme/ui-react";
import React from "react";
import { Poppins } from "next/font/google";
import { Header, Sidebar } from "components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
});

export interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={`${poppins.variable} font-primary`}>
      <Header />
      <Sidebar />
      {/* Add margin according to header height */}
      <Container className="mt-16 pt-8">{children}</Container>
    </main>
  );
};

export default Main;
