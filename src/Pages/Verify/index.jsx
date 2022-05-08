import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import HomeContainer from "../../Components/HomeContainer";
import Loader from "../../Components/Loader";
import Button from "../../Components/Button";
import "./index.scss";
import "../../Components/EmailSent/index.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { BUTTON } from "../../Util/constants";

function Index() {
  const [searchParams] = useSearchParams();
  const { loading, register, authAction } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    authAction.Verify({ token: token });
  }, []);

  useEffect(() => {
    register && register.success && navigate("/login", { replace: true });
  }, [register]);

  return (
    <HomeContainer>
      <div className="email-sent-container">
        <div className="email-sent">
          {!loading && (
            <FontAwesomeIcon
              className="error-icon"
              icon={faExclamationCircle}
              size="3x"
            />
          )}
          {loading && <Loader />}
          <div className="header">
            {loading ? "Please Wait ..." : "Invalid Token"}
          </div>
          <Button
            title={"Go To Login"}
            style={BUTTON.OUTLINE}
            type={BUTTON.LINK}
            linkTo={"/login"}
            replace={true}
          />
        </div>
      </div>
    </HomeContainer>
  );
}

export default Index;
