import styles from "./CreateIssue.module.css";
import cx from "clsx";
import Button from "../commponet/Button";
import TextField from "../commponet/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useForm } from "../hooks";
import { GITHUB_API } from "./../api";

export default function CreateIssue() {
  const inputref = useRef();
  const textArea = useRef();
  const navigate = useNavigate();
  const { isSubmitting, inputValue, onChange, errors, handleSubmit } = useForm({
    initialValues: { title: "", body: "" },
    onSubmit: async () =>
      await axios.post(
        `${GITHUB_API}/repos/fefdfea1/zerobase-mouseEvent/issues`,
        inputValue,
        {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN,
            "Content-Type": "applications/json",
          },
        },
      ),
    refs: { title: inputref, body: textArea },
    validata,
    onSuccess: () => {
      navigate("/", { replace: true });
    },
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatar}></div>
        <div className={cx(styles.inputWrapper, styles.border)}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="title"
              placeholder="Title"
              ref={inputref}
              value={inputValue.title}
              onChange={onChange}
              error={errors.title}
            />
            <TextField
              type="textarea"
              name="body"
              ref={textArea}
              placeholder="Leave a comment"
              value={inputValue.body}
              onChange={onChange}
              error={errors.body}
            />
            <div className={styles.buttonWrapper}>
              <Button
                type="submit"
                style={{
                  fontSize: "14px",
                  backgroundColor: "green",
                  color: "white",
                }}
                disabled={isSubmitting}
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

function validata(values) {
  let errors = {};
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }
  return errors;
}
