import React, { useState } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Form from "../../Components/Form";
import Logo from "../../assets/SawaalJawab -mailer.png";
import "../Register/index.scss";

function Index() {
  const [fields, setFields] = useState({
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
  });

  const textFromForm = (name, value) => {};
  const submit = () => {};

  return (
    <HomeContainer>
      <div className="login-container">
        <div className="login-box">
          <img src={Logo} />
          <Form
            title={"Login"}
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
