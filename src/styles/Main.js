import styled from "styled-components";
import { Card } from "./Card";

export const StyledMain = styled.main`
  background-color: #e4e6eb;
  padding-top: 0.5rem;
`;

export const StyledDiv1 = styled.div`
  display: grid;
  gap: 0.3rem;
  grid-template-columns: 68% 32%;
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  max-height: 10rem;

  & img {
    max-height: 10rem;
  }
`;

export const ArticleHeading = styled.div`
  margin: 0.5rem;
`;

export const Div1Main = styled.div`
  & > :first-child {
    display: flex;
  }

  & > :first-child > :first-child {
    width: 63%;
  }

  & > :first-child > :nth-child(2) {
    width: 33%;
  }

  & > :nth-child(2) {
    display: flex;
  }

  & > :nth-child(2) > :first-child {
    width: 50%;
  }

  & > :nth-child(2) > :nth-child(2) {
    width: 50%;
  }

  & ${Card} {
    margin: 0.4rem;
    padding-bottom: 0.5rem;
  }

  & ${Card} a:hover {
    color: ${({ theme }) => theme.hoverColor};
  }

  & ${Card} a {
    display: flex;
    align-items: center;
  }

  & > :first-child a {
    flex-direction: column;
  }

  & > :first-child a ${ImageDiv} img {
    width: 100%;
    height: 100%;
  }

  & > :nth-child(2) > :nth-child(2) a ${ImageDiv} {
    display: none;
  }

  & > :nth-child(2) > :nth-child(2) a ${ArticleHeading} {
    & h3 {
      font-weight: 300;
      font-size: 2.2rem;
      font-family: "Cormorant Garamond", serif;
      margin: 0.5rem 0;
    }
  }

  & > :nth-child(3) a {
    display: grid;
    grid-template-columns: 70% 30%;
  }

  & > :nth-child(3) ${ImageDiv} {
    max-height: 13.3rem;
  }

  & > :nth-child(3) ${ImageDiv} img {
    max-height: 13.3rem;
  }

  & > :nth-child(3) a > :nth-child(2) {
    align-self: flex-start;
    margin-top: 0;
  }

  & > :nth-child(3) a > :nth-child(2) p {
    margin-top: 0;
  }

  & > :nth-child(3) a > :nth-child(2) h3 {
    font-size: 1.7rem;
  }

  & p {
    font-family: "Share Tech Mono", monospace;
    text-transform: uppercase;
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

export const StyledAside = styled.aside`
  & a ${ImageDiv} {
    margin-top: 0.7rem;
    width: 100%;
    height: 100%;
    max-height: 4rem;
  }

  & img {
    max-width: 5rem;
    height: 4rem;
  }

  & ${Card} > :first-child {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding-bottom: 1rem;
  }

  & ${Card}:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0px;
  }

  & a {
    display: grid;
    grid-template-columns: 30% 70%;
  }

  & a:hover {
    color: ${({ theme }) => theme.hoverColor};
  }

  & h2 {
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0 1rem;
  }

  & p {
    font-family: "Share Tech Mono", monospace;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin: 0;
    color: ${({ theme }) => theme.hoverColor};
  }

  & h3 {
    font-weight: 500;
    margin: 0;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  & ${Card} {
    border-top: 9px solid #333;
    padding: 1rem 0;
    padding-bottom: 0.5rem;
  }
`;

export const AsideMain = styled.div`
  margin: 0 0.7rem;

  & > div {
    height: 7rem;
    padding: 0.2rem;
    padding-top: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  & > :last-child {
    border-bottom: none;
  }
`;

export const AsideFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;

  & > div {
    background-color: #636161;
    width: 2rem;
    border-radius: 50%;
    margin: 0.6rem 1rem;
  }

  & > div svg {
    margin-top: 0.2rem;
    margin-left: 0.4rem;
  }

  & h4 {
    align-self: center;
    text-transform: uppercase;
    font-family: "Syne Mono", monospace;
    font-weight: 500;
  }
`;
