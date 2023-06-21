import { useState } from "react";

export const useForm = ({
  validata,
  initialValues,
  onSuccess, //성공
  onErrors, //에러
  onSubmit, //값이 전달될때
  refs,
}) => {
  const [inputValue, setInputValues] = useState(initialValues);
  const [errors, setErorrs] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const valudateResult = validata(inputValue);
    setErorrs(valudateResult);
    const errorKeys = Object.keys(valudateResult);

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(valudateResult[key]);
      onErrors();
      refs[key].current.focus();
      //ref control
      setIsSubmitting(false);
      return;
    }
    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (e) {
        console.log({ e });
        onErrors();
      }
      return;
    }
  };

  return {
    inputValue,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
};
