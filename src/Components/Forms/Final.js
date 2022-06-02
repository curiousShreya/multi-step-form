import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName, email, address, appartment, city, state, zip  } = values;
  console.log(values);
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
            <h3 style={{textAlign: 'center', marginBottom: '20px'}}>Details You Filled</h3>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Address :</strong> {address}{" "}
          </p>
          <p>
            <strong>City :</strong> {city}{" "}
          </p>
          <p>
            <strong>State :</strong> {state}{" "}
          </p>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;