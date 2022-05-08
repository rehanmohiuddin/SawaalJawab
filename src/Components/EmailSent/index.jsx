import {
  faEnvelopeCircleCheck,
  faRefresh,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BUTTON } from "../../Util/constants";
import "./index.scss";
import Button from "../Button";
import Loader from "../Loader";

function Index({ email = "abc@gmail.com", resend, loading }) {
  return (
    <div className="email-sent-container">
      <div className="email-sent">
        <FontAwesomeIcon
          className="email-sent-icon"
          icon={faEnvelopeCircleCheck}
          size="5x"
        />
        <div className="header">Email Sent</div>
        <div className="body">
          Email Has Been Sent To <span>{email}</span>
          <br />
          Please Check Your Email And Verify Your Account
          <br />
          <span className="link-text">
            ** The Link Will Be Valid For 5 Minutes Only **
          </span>
        </div>
        <Button
          title={"Submit"}
          type={BUTTON.BUTTON}
          style={BUTTON.PRIMARY}
          callBack={resend}
        >
          <div className="btn-resend-container">
            {!loading && (
              <FontAwesomeIcon
                icon={faRepeat}
                className="resend-icon"
                size="1x"
              />
            )}
            {loading && <Loader />}
            {loading ? "Please Wait" : <span onClick={resend}>Resend</span>}
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Index;
