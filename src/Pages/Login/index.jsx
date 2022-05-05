import React, { useEffect, useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Form from "../../Components/Form";
import Logo from "../../assets/SawaalJawab -mailer.png";
import "../Register/index.scss";
import useFormValidator from "../../hooks/useFormValidator";
import Button from "../../Components/Button";
import { BUTTON } from "../../Util/constants";
import { faEnvelopeSquare, faKey } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/Auth";
import { Navigate } from "react-router-dom";
import AuthLeft from "../../Components/AuthLeft";

function Index() {
  const [fields, setField] = useState({
    email: {
      name: "Email",
      value: "",
      type: "email",
      placeholder: "johndoe@gmail.com",
      tagName: "email",
      required: true,
      constraints: {
        regEx:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        msg: "Email is Not Valid",
      },
      icon: faEnvelopeSquare,
    },
    password: {
      name: "Password",
      value: "",
      type: "password",
      placeholder: "Enter Password",
      tagName: "password",
      required: true,
      constraints: {
        regEx: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
        msg: "Password is Not Valid",
      },
      icon: faKey,
    },
  });
  const [textInput, setFields, errorState, isFieldsEmpty] = useFormValidator();
  const { loading, authAction, isLoggedIn } = useAuth();

  useEffect(() => {
    setFields(fields);
  }, [fields]);

  const textFromForm = (name, value) => {
    setField({ ...fields, [name]: { ...fields[name], value: value } });
    textInput(name, value);
  };

  const submit = (e) => {
    const isEmpty = isFieldsEmpty();
    const payload = {};
    Object.keys(fields).forEach((key) => {
      payload[key] = fields[key].value;
    });
    !errorState && !isEmpty ? authAction.Login(payload) : alert("failed");
  };

  return (
    <HomeContainer>
      {isLoggedIn && <Navigate to={"/"} replace />}
      <div className="login-container">
        <AuthLeft />
        <div className="login-box">
          <Form
            title={"Welcome Back"}
            fields={fields}
            onTextInput={textFromForm}
            submitCallBack={submit}
            errorState={errorState}
            loading={loading}
            formFor={"Login"}
          />
          <div className="login-btn">
            <Button
              title={"New User ?"}
              style={BUTTON.LINK}
              type={BUTTON.LINK}
              linkTo={"/register"}
            />
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Index;
