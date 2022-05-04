import React, { useEffect, useRef, useState } from "react";

function useFormValidator() {
  const [fields, setFields] = useState(null);
  const [errorState, setErrorState] = useState({});

  const isFieldsEmpty = () => {
    Object.keys(fields).forEach((key) => {
      if (fields[key].isEmpty) {
        setErrorState({ errorMsg: "Please Fill All Fields" });
        return true;
      }
    });
    return false;
  };

  const textInput = (name, value) => {
    const validatorPromise = new Promise((resolve, reject) => {
      fields[name].constraints && !fields[name].constraints.regEx.test(value)
        ? reject({ name: name, errorMsg: fields[name].constraints.msg })
        : resolve(null);
    });

    const validatorWithPasswordPromise = new Promise((resolve, reject) => {
      validatorPromise
        .then(() =>
          fields.password === fields.confirmPassword
            ? resolve(null)
            : reject({ name: name, errorMsg: "Passwords Doesn't Match" })
        )
        .catch(() =>
          reject({ name: name, errorMsg: fields[name].constraints.msg })
        );
    });

    if (name === "password" && fields.confirmPassword) {
      validatorWithPasswordPromise
        .then((res) => {
          setErrorState(res);
          setFields({ ...fields, [name]: { ...fields[name], isEmpty: null } });
        })
        .catch((err) => setErrorState(err));
    } else {
      validatorPromise
        .then((res) => {
          setErrorState(res);
          setFields({ ...fields, [name]: { ...fields[name], isEmpty: null } });
        })
        .catch((err) => setErrorState(err));
    }
  };

  return [textInput, setFields, errorState, isFieldsEmpty];
}

export default useFormValidator;
