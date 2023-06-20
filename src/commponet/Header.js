import styles from "./Header.module.css";
import Button from "./Button";
import Tab from "./Tabs";
// import Butt

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}></div>
      <Tab title="title" number={5} />
    </div>
  );
}
