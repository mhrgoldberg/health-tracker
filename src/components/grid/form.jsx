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
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "addToHealthData",
      payload: { energy, muscularFatigue, hunger, productivity },
    })
    resetFields()
    console.log(state)
  };

  const resetFields = () => {
    setEnergy(0);
    setMuscularFatigue(0);
    setHunger(0);
    setProductivity(0);
  }

  return (
    <Form className="health-form" onSubmit={saveHealthData}>
      <Form.Group controlId="energy">
        <Form.Label>Energy</Form.Label>
        <div>{energy}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          value={energy}
          tabIndex="1"
          onChange={(event) => {
            setEnergy(parseInt(event.currentTarget.value, 10));
          }}
        />
        <Form.Label>Muscular Fatigue</Form.Label>
        <div>{muscularFatigue}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          value={muscularFatigue}
          tabIndex="2"
          onChange={(event) => {
            setMuscularFatigue(parseInt(event.currentTarget.value, 10));
          }}
        />

        <Form.Label>Hunger</Form.Label>
        <div>{hunger}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          value={hunger}
          tabIndex="3"
          onChange={(event) => {
            setHunger(parseInt(event.currentTarget.value, 10));
          }}
        />

        <Form.Label>Productivity</Form.Label>
        <div>{productivity}</div>
        <Form.Control
          type="range"
          min="0"
          max="5"
          value={productivity}
          tabIndex="4"
          onChange={(event) => {
            setProductivity(parseInt(event.currentTarget.value, 10));
          }}
        />
      </Form.Group>
      <Button tabIndex="5" type="submit" variant="primary">Scan Complete</Button>
    </Form>
  );
}
