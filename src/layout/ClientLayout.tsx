import React, { FC } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  if (pathname === "/dashboard") {
    return <div className={styles.container}>{children}</div>;
  }

  return (
    <div id="heatmapContainer" className={styles.container}>
      <Header />
      <main className={styles.main} role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
