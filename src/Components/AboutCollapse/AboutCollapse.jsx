import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ListAbout(props) {
  return (
    <li className="accordion__li">
      <input type="checkbox" name="accordion" id={`accordion-${props.collapseTitle}`} />
      <div className="accordion__title">
        <label htmlFor={`accordion-${props.collapseTitle}`}>{props.collapseTitle}</label>
        <FontAwesomeIcon icon={faChevronUp} className="accordion__icon" />
      </div>
      <div className="accordion__content">
        <p>{props.collapseContent}</p>
      </div>
    </li>
  );
}

export default ListAbout;
