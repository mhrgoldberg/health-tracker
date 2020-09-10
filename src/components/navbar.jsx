import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/button";
import { AppContext } from "../app_context";


export default function NavBar() {
  const { dispatch } = useContext(AppContext);

  return (
    <Navbar bg="primary" variant="dark">
      <span className="navbar-span">
        <Navbar.Brand>Body Scan</Navbar.Brand>
        <Button
      variant="danger"
      onClick={() => {
        dispatch({ type: "reset" });
      }}
    >
      Reset

    </Button>
      </span>
    </Navbar>
  );
}
