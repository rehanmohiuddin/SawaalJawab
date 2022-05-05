import React from "react";
import Logo from "../../assets/SawaalJawab -mailer.png";
import { BUTTON } from "../../Util/constants";
import Button from "../Button";

function Index() {
  return (
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
  );
}

export default Index;
