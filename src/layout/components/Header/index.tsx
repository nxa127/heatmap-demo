import React, { FC } from "react";
import styles from "./styles.module.css";

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
        <div className={styles.rightContent}>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
