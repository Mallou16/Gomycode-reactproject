import React, { useState, useEffect } from "react";        //hooks
import axios from "axios";                                //API
import Card from "./Card";                               //component "card"
import { Container, Row, Col } from "react-bootstrap";

const Countries = () => {
  const [Cov19, setCov19] = useState([]);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary", {
        headers: {
          "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
        },
      })
      .then((response) => {
        setCov19(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var pays;

  Cov19.length !== 0 
 
    ? (pays = Cov19.Countries.filter((Country) => {
        for (let i = 0; i < search.length; i++) {
          if (Country.Country.toLowerCase().indexOf(search[i]) === -1) {
            return false;
          }
        }
        return true;
      })
      .map((Contry) => {
        return (
          <Col>
            <Card contry={Contry} />
          </Col>
        );
      }))
    : (pays = []);

  return (
    <div>
      <>
        {Cov19.length !== 0 ? (
          <>
            <h2>date {Cov19.Global.Date.slice(0, 10)}</h2>
            <h2>
              Total Confirmed :{" "}
              <span style={{ color: "#C71585" }}>
                {" "}
                {Cov19.Global.TotalConfirmed}
                <span>&#129319;</span>
              </span>
            </h2>
            <h2>
              Total death :{" "}
              <span style={{ color: "#C71585" }}>
                {" "}
                {Cov19.Global.TotalDeaths}
                <span>&#x1f480;</span>
              </span>
            </h2>

            <>
              <input
                placeholder="Search"
                style={{ marginLeft: "30%", width: "25%" }}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </>
            <div>
              <Container fluid>
                <Row>{pays}</Row>
              </Container>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </>
    </div>
  );
};

export default Countries;
