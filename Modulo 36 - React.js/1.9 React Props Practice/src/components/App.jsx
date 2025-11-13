import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Heading />
      <Card
        contactName={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
        profilePic={contacts[0].imgURL}
      />
      <Card
        contactName={contacts[1].name}
        phone={contacts[1].phone}
        email={contacts[1].email}
        profilePic={contacts[1].imgURL}
      />
      <Card
        contactName={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
        profilePic={contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
