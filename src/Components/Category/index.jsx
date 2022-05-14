import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import { BUTTON, categories } from "../../Util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

function Index({ trigger, selectCategory }) {
  return (
    <Modal header={"Select Categories"} trigger={trigger}>
      <ul class="list">
        {categories.map((_category) => (
          <li
            id="category"
            onClick={(e) =>
              selectCategory({
                ...e,
                target: { ...e.target, value: _category, id: "category" },
              })
            }
          >
            <FontAwesomeIcon icon={_category.icon} />
            {_category.name}
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default Index;
