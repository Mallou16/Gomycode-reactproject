import React from "react";
import Card from "react-bootstrap/Card";

export default function Cards(props) {
  var condition;
  var active =
    props.contry.TotalConfirmed -
    props.contry.TotalDeaths -
    props.contry.TotalRecovered;
  if (active === 0) {
    condition = true;
  } else {
    condition = false;
  }

  return (
    <Card style={{ width: "18rem" }} id={condition ? "safe" : "danger"}>
      <Card.Body>
        <Card.Title>{props.contry.Country}</Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{
            color: "black !important",
            fontStyle: "italic",
          }}
        >
          info
        </Card.Subtitle>
        <Card.Text>Total Cases : {props.contry.TotalConfirmed} </Card.Text>
        <Card.Text>Total Deaths : {props.contry.TotalDeaths} </Card.Text>
        <Card.Text>Total Recovery : {props.contry.TotalRecovered}</Card.Text>
        <Card.Text>Active cases : {active}</Card.Text>
      </Card.Body>
    </Card>
  );
}
