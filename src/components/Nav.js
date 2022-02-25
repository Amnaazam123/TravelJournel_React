import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="Nav">
      <FontAwesomeIcon icon={faGlobeAmericas} />
      <span className="navText">My Travel Journel</span>
    </nav>
  );
}
