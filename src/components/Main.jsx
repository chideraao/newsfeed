import React from "react";
import { Container } from "../styles/Container";
import { StyledMain } from "../styles/Main";
import Div1 from "./Div1";
import Div2 from "./Div2";
import VideosDiv from "./VideosDiv";

function Main({
  general,
  technology,
  business,
  sports,
  health,
  entertainment,
}) {
  return (
    <StyledMain>
      <Container>
        <Div1 general={general} technology={technology} />
        <VideosDiv />
        <Div2 general={general} technology={technology} />
      </Container>
    </StyledMain>
  );
}

export default Main;
