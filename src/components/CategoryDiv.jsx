import React from "react";
import { Card } from "../styles/Card";
import {
  ArticleHeading,
  AsideFooter,
  AsideMain,
  ImageDiv,
  StyledAside,
} from "../styles/FinalDiv";
import { ReactComponent as More } from "../assets/east_black_24dp.svg";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function CategoryDiv({ data, heading, limit, margin, fill, fillTwo }) {
  var popularContent = [...data];
  var popularMain = [];

  shuffle(popularContent);

  popularContent.forEach((article) => {
    if (article.image !== null) {
      popularMain.push(article);
    }
  });

  popularMain.length = limit;

  console.log(fill);

  return (
    <StyledAside>
      {fill ? (
        <Card className="fill">
          <a href={fill.url}>
            <ImageDiv>
              <img src={fill.image} alt={`Thumbnail of ${fill.title}`} />
            </ImageDiv>
            <ArticleHeading>
              <p>{fill.category}</p>
              <h3>{fill.title} </h3>
              <p>{fill.author || fill.source} </p>
            </ArticleHeading>
          </a>
        </Card>
      ) : (
        ""
      )}
      <Card>
        <div>
          <h2>{heading}</h2>
        </div>
        <AsideMain>
          {popularMain.map((article) => {
            return (
              <div>
                <a href={article.url}>
                  <ImageDiv>
                    <img
                      src={article.image}
                      alt={`Thumbnail of ${article.title}`}
                    />
                  </ImageDiv>
                  <div>
                    <p>{article.category}</p>
                    <h3>
                      {article.title.length > 55
                        ? `${article.title.slice(0, 55)}...`
                        : article.title}{" "}
                    </h3>
                    <p>{article.author || article.source}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </AsideMain>
        <AsideFooter>
          <div role="button">
            <More />
          </div>
          <h4>More {heading}</h4>
        </AsideFooter>
      </Card>
      {fillTwo ? (
        <Card className="fill fillTwo">
          <a href={fillTwo.url}>
            <ImageDiv>
              <img src={fillTwo.image} alt={`Thumbnail of ${fillTwo.title}`} />
            </ImageDiv>
            <ArticleHeading>
              <p>{fillTwo.category}</p>
              <h3>{fillTwo.title} </h3>
              <p>{fillTwo.author || fillTwo.source} </p>
            </ArticleHeading>
          </a>
        </Card>
      ) : (
        ""
      )}
    </StyledAside>
  );
}

export default CategoryDiv;
