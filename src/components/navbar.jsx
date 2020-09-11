import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/button";
import Container from "react-bootstrap/Container";
// import { AppContext } from "../app_context";
import { ReactComponent as SkeletonLogo } from "../human.svg";

export default function NavBar() {
  // const { dispatch } = useContext(AppContext);

  return (
    <Navbar bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand>
          <SkeletonLogo className="logo" />
          Body Scan
        </Navbar.Brand>
        {/* <Button
          variant="danger"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </Button> */}
      </Container>
    </Navbar>
  );
}
