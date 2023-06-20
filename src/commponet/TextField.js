import { forwardRef } from "react";
import styles from "../pages/CreateIssue.module.css";
import cx from "clsx";

export default forwardRef(function TextField(
  { type = "input", name, placeholder },
  ref,
) {
  return type === "input" ? (
    <input
      name={name}
      ref={ref}
      type="text"
      className={cx(styles.input, styles.border)}
      placeholder={placeholder}
    />
  ) : (
    <textarea
      name={name}
      ref={ref}
      className={cx(styles.input, styles.textarea, styles.border)}
      placeholder={placeholder}
    ></textarea>
  );
});
