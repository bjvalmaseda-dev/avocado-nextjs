import React from "react";
import Navbar from "@components/Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>This a footer</footer>
    </>
  );
};

export default Layout;
