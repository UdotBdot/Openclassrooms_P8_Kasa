import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ collapseTitle, collapseContent }) {
  const accordionId = `accordion-${collapseTitle}`;

  return (
    <section className="accordion">
      <div className="accordion__container">
        <input
          type="checkbox"
          name="accordion"
          id={accordionId}
        />
        <div className="accordion__title">
          <label htmlFor={accordionId}>
            {collapseTitle}
          </label>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="accordion__icon"
          />
        </div>
        <div className="accordion__content">
          {collapseContent}
        </div>
      </div>
    </section>
  );
}

export default Collapse;
