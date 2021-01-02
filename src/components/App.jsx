import React from "react";
import { RecoilRoot } from "recoil";
import Container from "react-bootstrap/Container";
import Routes from "./Routes";

function App() {
  return (
    <RecoilRoot>
      <Container>
        <Routes />
      </Container>
    </RecoilRoot>
  );
}

export default App;
