import React from "react";
import Data from "./components/data.js";
import Card from "./components/Card.js";
import Nav from "./components/Nav.js";

export default function App() {
  const myCards = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="main">
      <Nav />
      {myCards}
    </div>
  );
}
