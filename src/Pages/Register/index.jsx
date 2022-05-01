import React, { useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Form from "../../Components/Form";
import Logo from "../../assets/SawaalJawab -mailer.png";
import "./index.scss";

function Index() {
  const [fields, setFields] = useState({
    firstName: {
      name: "First Name",
      value: "",
      type: "text",
      placeholder: "Enter First Name",
      tagName: "firstName",
      required: true,
    },
    lastName: {
      name: "Last Name",
      value: "",
      type: "text",
      placeholder: "Enter Last Name",
      tagName: "lastName",
      required: true,
    },
    email: {
      name: "Email",
      value: "",
      type: "email",
      placeholder: "johndoe@gmail.com",
      tagName: "email",
      required: true,
    },
    password: {
      name: "Password",
      value: "",
      type: "password",
      placeholder: "Enter Password",
      tagName: "password",
      required: true,
    },
    confirmPassword: {
      name: "Confirm Password",
      value: "",
      type: "password",
      placeholder: "Confirm Password",
      tagName: "confirmPassword",
      required: true,
    },
  });

  const textFromForm = (name, value) => {};
  const submit = () => {};

  return (
    <HomeContainer>
      <div className="login-container">
        <div className="login-box">
          <img src={Logo} />
          <Form
            title={"Register"}
            fields={fields}
            onTextInput={textFromForm}
            submitCallBack={submit}
          />
        </div>
      </div>
    </HomeContainer>
  );
}

export default Index;
