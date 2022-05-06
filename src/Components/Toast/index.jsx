import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./index.scss";
import Button from "../Button";
import { BUTTON } from "../../Util/constants";
import { useToast } from "../../context/Toast";
import { ERROR } from "../../actions/Toast";

function Index() {
  const { message, action, toast, messageType } = useToast();
  useEffect(() => {
    setTimeout(() => {
      toast.close();
    }, 5000);
    return () => {
      toast.close();
    };
  }, []);

  return (
    <div
      className={`kash-snackbar kash-flex kash-align-center kash-bg-gray ${
        messageType === ERROR && "error"
      }`}
    >
      {message} !
      <div className="kash-flex kash-align-center actions">
        {action && (
          <Button
            type={BUTTON.BUTTON}
            style={BUTTON.PRIMARY}
            title={"OK"}
            callBack={action.call}
          />
        )}
        <FontAwesomeIcon icon={faTimesCircle} onClick={toast.close} />
      </div>
    </div>
  );
}

export default Index;
