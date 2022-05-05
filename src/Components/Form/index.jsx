import React from "react";
import "./index.scss";
import Button from "../Button";

const Index = ({ title, fields, onTextInput, submitCallBack }) => {
  return (
    <div className="form-container">
      <div className="form-title">{title}</div>
      {Object.keys(fields).map((key) => {
        const { name, type, placeholder, tagName, required } = fields[key];
        return (
          <div class="kash-container  kash-flex kash-justify-center kash-align-center  kash-gap input-container">
            <fieldset id="kash-input-click">
              <legend>
                {name} {required && <span>*</span>}
              </legend>
              <input
                name={tagName}
                onChange={(e) => onTextInput(name, e.target.value)}
                class="kash-input"
                type={type}
                id="kash-input"
                required={required}
                placeholder={placeholder}
              />
            </fieldset>
          </div>
        );
      })}
      <div className="btn-submit">
        <Button title={"Submit"} callBack={submitCallBack} />
      </div>
    </div>
  );
};

export default Index;
