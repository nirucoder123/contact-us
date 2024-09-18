import React from "react";
import styles from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="/images/temp-logo-png-transparent.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navigation;
