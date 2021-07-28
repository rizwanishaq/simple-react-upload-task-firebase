import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const CountryCard = ({ country }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={country.flag} />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{country.capital}</ListGroupItem>
          <ListGroupItem>{country.region}</ListGroupItem>
          <ListGroupItem>{country.nativeName}</ListGroupItem>
        </ListGroup>
        <Button variant="primary">More Information</Button>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
