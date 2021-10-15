import React from "react";
import { Card } from "../styles/Card";
import { Container } from "../styles/Container";
import {
  ArticleHeading,
  ImageDiv,
  StyledFullDiv,
  StyledMain,
} from "../styles/Main";
import Div1 from "./Div1";
import Div2 from "./Div2";
import FinalDiv from "./FinalDiv";
import VideosDiv from "./VideosDiv";

function Main({
  general,
  technology,
  business,
  sports,
  science,
  entertainment,
}) {
  var newTechnology = [];

  technology.forEach((article) => {
    if (article.image !== null) {
      newTechnology.push(article);
    }
  });

  return (
    <StyledMain>
      <Container>
        <Div1 general={general} technology={technology} />
        <VideosDiv />
        <Div2 general={general} technology={technology} />
        <StyledFullDiv>
          <Card>
            <a href={newTechnology[3].url} target="_blank" rel="noreferrer">
              <ImageDiv>
                <img
                  src={newTechnology[3].image}
                  alt={`Thumbnail of ${newTechnology[3].title}`}
                />
              </ImageDiv>
              <ArticleHeading>
                <p>{newTechnology[3].category}</p>
                <h3>{newTechnology[3].title} </h3>
                <p>{newTechnology[3].author || newTechnology[3].source} </p>
              </ArticleHeading>
            </a>
          </Card>
        </StyledFullDiv>
        <FinalDiv general={general} technology={technology} />
      </Container>
    </StyledMain>
  );
}

export default Main;
