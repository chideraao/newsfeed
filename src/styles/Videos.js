import styled from "styled-components";
import { Card } from "./Card";

export const StyledVideos = styled.div`
  height: 38rem;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  overflow: hidden;

  & ${Card} {
    padding: 1rem 0;
    padding-top: 0.5rem;
    border-top: 9px solid #333;
    margin: 3px 0;
  }

  & ${Card}:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0px;
  }

  & ${Card} > :first-child {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    margin-bottom: 1rem;
  }

  & h2 {
    text-transform: uppercase;
    font-family: "Syne Mono", monospace;
    margin: 0 1rem;
  }

  & ${Card} > :first-child > div > div {
    background-color: #636161;
    width: 2rem;
    border-radius: 50%;
    margin: 0.6rem 0.5rem;
  }

  & ${Card} > :first-child > div > div svg {
    margin-top: 0.25rem;
    margin-left: 0.3rem;
  }

  & ${Card} > :first-child > div h4 {
    align-self: center;
    text-transform: uppercase;
    font-family: "Syne Mono", monospace;
    font-weight: 500;
  }
`;

export const VideosMain = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  margin: 0 1rem;
  margin-right: 0;

  & > :first-child {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
    padding-right: 1rem;
  }

  & iframe {
    width: 100%;
    height: 23rem;
  }

  & p {
    font-family: "Share Tech Mono", monospace;
    font-size: 0.75rem;
    margin: 0;
    margin-top: 8px;
    color: ${({ theme }) => theme.hoverColor};
  }

  & p#description {
    font-size: 1rem;
    color: #333;
    font-family: "Slabo 27px", serif;
  }

  & h3 {
    font-weight: 700;
    margin: 0;
    font-size: 1.2rem;
  }

  & > :nth-child(2) {
    height: 32rem;
    margin: 0 0.6rem;
    border-right: 1px solid ${({ theme }) => theme.borderColor};
    overflow: scroll;
  }

  & :nth-child(2) > div {
    display: flex;
    flex-direction: column;
    height: 11rem;
    margin: 0 0.5rem;
    margin-bottom: 0.7rem;
    margin-right: 1.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  & div :hover {
    color: ${({ theme }) => theme.hoverColor};
  }

  & > :nth-child(2) iframe {
    width: 13rem;
    height: 6rem;
  }

  & :nth-child(2) h4 {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
