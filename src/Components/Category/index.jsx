import React, { useRef, useState } from "react";
import Modal from "../Modal";
import Button from "../Button";
import { BUTTON, categories } from "../../Util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

function Index({ trigger, selectCategory }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open && (
        <Modal header={"Select Categories"} Open={true}>
          <ul class="list">
            {categories.map((_category) => (
              <li
                id="category"
                onClick={(e) => {
                  selectCategory({
                    ...e,
                    target: { ...e.target, value: _category, id: "category" },
                  });
                  setOpen(false);
                }}
              >
                <FontAwesomeIcon icon={_category.icon} />
                {_category.name}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
}

export default Index;
