import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card1">
      <div className="img1">
        <img src={props.item.imageUrl} alt="design" />
      </div>
      <FontAwesomeIcon className="locIcon" icon={faMapMarkerAlt} />
      <span className="loc">{props.item.location}</span>
      <span className="map">
        <a href={props.item.googleMapsUrl}>view on google map</a>
      </span>
      <div className="dates">
        <span>{props.item.startDate} - </span>
        <span>{props.item.endDate}</span>
      </div>
      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>
    </div>
  );
}
