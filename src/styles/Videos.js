import styled from "styled-components";
import { Card } from "./Card";

export const StyledVideos = styled.div`
  & ${Card} {
    padding: 1rem 0;
    padding-top: 0.5rem;
    border-top: 9px solid #333;
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

  & > :first-child {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
    padding-right: 1rem;
  }

  & iframe {
    width: 100%;
    height: 25rem;
  }

  & p {
    font-family: "Share Tech Mono", monospace;
    font-size: 0.75rem;
    margin: 0;
    margin-top: 8px;
    color: ${({ theme }) => theme.hoverColor};
  }

  & h3 {
    font-weight: 700;
    margin: 0;
    font-size: 1.2rem;
  }
`;
