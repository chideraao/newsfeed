import React from "react";
import { Card } from "../styles/Card";
import { StyledVideos, VideosMain } from "../styles/Videos";
import { ReactComponent as More } from "../assets/east_black_24dp.svg";

function VideosDiv() {
  return (
    <StyledVideos>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>latest videos</h2>
          <div style={{ display: "flex", marginRight: "1rem" }}>
            <div>
              <More />
            </div>
            <h4>More Stories</h4>
          </div>
        </div>
        <VideosMain>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BEbVddOm2X8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div>
              <p>TECHNOLOGY</p>
              <h3>Why So Many CEOs Are Engineers</h3>
              <p>
                Why more CEOs now have engineering degrees rather than MBAs.
                Brush up on your calculus, programming, and other skills for
                free at https://brilliant.org/newsthink/. The first 200 people
                to sign up get 20% off the Premium subscription. Merch ►
                https://teespring.com/stores/newsthink Thank you to my Patrons,
                including: Jakob Davis (Patreon Executive Producer), Ronil
                Patel, Chesky Neceski, Austin Grant, Darren Tyrell-Knights, Tom
                Eng, Tim Desir, David Dales, Ryan Bresser, Justin Anderson, Neo
                Ge Support Cindy on Patreon ► https://www.patreon.com/Newsthink
                Have a video idea? Click here:
                https://forms.gle/Qf8aNoeZPjACm3gbA
              </p>
            </div>
          </div>
        </VideosMain>
      </Card>
    </StyledVideos>
  );
}

export default VideosDiv;
