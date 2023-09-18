import React, { FC } from "react";
import styles from "./styles.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main} role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
