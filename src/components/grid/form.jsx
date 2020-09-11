import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { AppContext } from "../../app_context";

export default function HealthForm() {
  const [energy, setEnergy] = useState(0);
  const [muscularFatigue, setMuscularFatigue] = useState(0);
  const [hunger, setHunger] = useState(0);
  const [productivity, setProductivity] = useState(0);
  const { state, dispatch } = useContext(AppContext);

  const saveHealthData = (event) => {
    debugger;
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "addToHealthData",
      payload: { energy, muscularFatigue, hunger, productivity },
    }, () => console.log(state))

  };

  return (
    <Form className="health-form" onSubmit={saveHealthData}>
      <Form.Group controlId="energy">
        <Form.Label>Energy</Form.Label>
        <div>{energy}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={energy}
          onChange={(event) => {
            setEnergy(event.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="muscularFatigue">
        <Form.Label>Muscular Fatigue</Form.Label>
        <div>{muscularFatigue}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={muscularFatigue}
          onChange={(event) => {
            setMuscularFatigue(event.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="hunger">
        <Form.Label>Hunger</Form.Label>
        <div>{hunger}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={hunger}
          onChange={(event) => {
            setHunger(event.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="productivity">
        <Form.Label>Productivity</Form.Label>
        <div>{productivity}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={productivity}
          onChange={(event) => {
            setProductivity(event.currentTarget.value);
          }}
        />
      </Form.Group>
      <Button variant="primary">Scan Complete</Button>
    </Form>
  );
}
