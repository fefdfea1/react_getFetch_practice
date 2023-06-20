import styles from "./space.module.css";

export default function Space({ style, children }) {
  return <div className={styles.button}>{children}</div>;
}
