import React, { useEffect, useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Form from "../../Components/Form";
import Logo from "../../assets/SawaalJawab -mailer.png";
import "../Register/index.scss";
import useFormValidator from "../../hooks/useFormValidator";
import Button from "../../Components/Button";
import { BUTTON } from "../../Util/constants";
import { faEnvelopeSquare, faKey } from "@fortawesome/free-solid-svg-icons";

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
          <div className="readmore-btn">
            <Button
              title={"Read More"}
              style={BUTTON.PRIMARY}
              type={BUTTON.BUTTON}
              linkTo={"/login"}
            />
          </div>
        </div>
        <div className="login-box">
          <Form
            title={"Welcome Back"}
            fields={fields}
            onTextInput={textFromForm}
            submitCallBack={submit}
            errorState={errorState}
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
