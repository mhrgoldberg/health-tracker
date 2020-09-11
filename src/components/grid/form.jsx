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
    const timeObject = new Date();
    const time = `${timeObject.getHours()}:${timeObject.getMinutes()}`
    dispatch({
      type: "addToHealthData",
      payload: { energy, muscularFatigue, hunger, productivity, time},
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
        <Form.Label>Energy | {energy}</Form.Label>
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
        <Form.Label>Muscular Fatigue | {muscularFatigue}</Form.Label>
      
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

        <Form.Label>Hunger | {hunger}</Form.Label>
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

        <Form.Label>Productivity | {productivity}</Form.Label>
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
      <Button tabIndex="5" type="submit" variant="primary">Log Scan</Button>
    </Form>
  );
}
