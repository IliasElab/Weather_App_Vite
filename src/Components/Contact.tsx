import React from "react";
import { contacts } from "./Constants";

const Contact = () => {
  const render_contacts = () => {
    let elements: JSX.Element[] = [];

    Object.values(contacts).forEach((element) => {
      elements.push(
        <li key={element.id} className={""}>
          <a href={element.link}>
            <i>{element.icon}</i>
            {element.content}
          </a>
        </li>
      );
    });
    return elements;
  };

  return <ul className="listOfContacts">{render_contacts()}</ul>;
};

export default Contact;
