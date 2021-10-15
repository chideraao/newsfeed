import React from "react";
import { StyledFinalDiv } from "../styles/FinalDiv";
import CategoryDiv from "./CategoryDiv";

function FinalDiv({ general, technology }) {
  var newTechnology = [];

  technology.forEach((article) => {
    if (article.image !== null) {
      newTechnology.push(article);
    }
  });

  return (
    <StyledFinalDiv>
      <CategoryDiv
        data={general}
        heading="Technology"
        limit={7}
        margin={false}
      />
      <CategoryDiv
        data={technology}
        heading="Business"
        limit={7}
        margin={false}
      />
      <CategoryDiv
        data={general}
        heading="Entertainment"
        limit={4}
        margin={true}
        fill={newTechnology[3]}
      />
      <CategoryDiv
        data={general}
        heading="Science"
        limit={4}
        margin={true}
        fill={newTechnology[1]}
      />
      <CategoryDiv
        data={technology}
        heading="General"
        limit={4}
        margin={true}
        fillTwo={newTechnology[5]}
      />
      <CategoryDiv data={general} heading="Sports" limit={7} margin={false} />
    </StyledFinalDiv>
  );
}

export default FinalDiv;
