import styles from "./CreateIssue.module.css";
import cx from "clsx";
import Button from "../commponet/Button";
import TextField from "../commponet/TextField";
import { useRef } from "react";

export default function CreateIssue() {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.title.value === "") {
      alert("타이틀 입력해");
      ref.current.focus();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatar}></div>
        <div className={cx(styles.inputWrapper, styles.border)}>
          <form onSubmit={handleSubmit}>
            <TextField name="title" placeholder="Title" ref={ref} />
            <TextField
              type="textarea"
              name="body"
              placeholder="Leave a comment"
            />
            <div className={styles.buttonWrapper}>
              <Button
                type="submit"
                style={{
                  fontSize: "14px",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Submit new issue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
