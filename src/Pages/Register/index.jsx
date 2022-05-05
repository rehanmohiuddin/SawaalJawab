import React, { useEffect, useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Form from "../../Components/Form";
import Logo from "../../assets/SawaalJawab -mailer.png";
import "./index.scss";
import useFormValidator from "../../hooks/useFormValidator";
import Button from "../../Components/Button";
import { BUTTON } from "../../Util/constants";
import {
  faEnvelopeSquare,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/Auth";
import EmailSent from "../../Components/EmailSent";
import AuthLeft from "../../Components/AuthLeft";

function Index() {
  const [fields, setField] = useState({
    firstName: {
      name: "First Name",
      value: "",
      type: "text",
      placeholder: "Enter First Name",
      tagName: "firstName",
      required: true,

      icon: faUser,
      constraints: {
        regEx: /(.*[a-z]){3}/i,
        msg: "Name Atleast 3 Char",
      },
    },
    lastName: {
      name: "Last Name",
      value: "",
      type: "text",
      placeholder: "Enter Last Name",
      tagName: "lastName",
      required: true,

      icon: faUser,
      constraints: {
        regEx: /(.*[a-z]){3}/i,
        msg: "Name Atleast 3 Char",
      },
    },
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
    confirmPassword: {
      name: "Confirm Password",
      value: "",
      type: "password",
      placeholder: "Confirm Password",
      tagName: "confirmPassword",
      required: true,
      constraints: {
        regEx: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
        msg: "Password Not Valid",
      },

      icon: faKey,
    },
  });
  const [textInput, setFields, errorState, isFieldsEmpty] = useFormValidator();
  const { loading, isEmailSent, authAction, dispatch } = useAuth();

  useEffect(() => {
    setFields(fields);
  }, [fields]);

  const textFromForm = (name, value) => {
    setField({
      ...fields,
      [name]: { ...fields[name], value: value, isEmpty: null },
    });
    textInput(name, value);
  };
  const submit = () => {
    const isEmpty = isFieldsEmpty();
    const payload = {};
    Object.keys(fields).forEach((key) => {
      payload[key] = fields[key].value;
    });
    console.log(authAction);
    !errorState && !isEmpty ? authAction.Register(payload) : alert("failed");
  };

  const resendEmail = () => {
    const payload = {};
    Object.keys(fields).forEach((key) => {
      payload[key] = fields[key].value;
    });
    authAction.Register(payload);
  };

  console.log({ loading });

  return (
    <HomeContainer>
      {!isEmailSent ? (
        <div className="login-container">
          <AuthLeft />
          <div className="login-box">
            <Form
              title={"Join Now"}
              fields={fields}
              onTextInput={textFromForm}
              submitCallBack={submit}
              errorState={errorState}
              loading={loading}
              formFor={"Register"}
            />
            <div className="login-btn">
              <Button
                title={" Already Have An Account ?"}
                style={BUTTON.LINK}
                type={BUTTON.LINK}
                linkTo={"/login"}
              />
            </div>
          </div>
        </div>
      ) : (
        <EmailSent
          email={fields.email.value}
          resend={resendEmail}
          loading={loading}
        />
      )}
    </HomeContainer>
  );
}

export default Index;
