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

function Index() {
  const [fields, setField] = useState({
    firstName: {
      name: "First Name",
      value: "",
      type: "text",
      placeholder: "Enter First Name",
      tagName: "firstName",
      required: true,
      isEmpty: true,
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
      isEmpty: true,
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
      isEmpty: true,
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
      isEmpty: true,
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
      isEmpty: true,
      icon: faKey,
    },
  });
  const [textInput, setFields, errorState, isFieldsEmpty] = useFormValidator();

  useEffect(() => {
    setFields(fields);
  }, [fields]);

  const textFromForm = (name, value) => {
    setField({ ...fields, [name]: { ...fields[name], value: value } });
    textInput(name, value);
  };
  const submit = () => {
    const isEmpty = isFieldsEmpty();
    !errorState && !isEmpty ? alert("success") : alert("failed");
  };

  return (
    <HomeContainer>
      <div className="login-container">
        <div className="login-left">
          <img src={Logo} />
          <div>Create, Host & Give Live Available Quizes</div>
          <Button
            title={" Login"}
            style={BUTTON.PRIMARY}
            type={BUTTON.BUTTON}
            linkTo={"/login"}
          />
        </div>
        <div className="login-box">
          <Form
            fields={fields}
            onTextInput={textFromForm}
            submitCallBack={submit}
            errorState={errorState}
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
    </HomeContainer>
  );
}

export default Index;
