import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const api = {
  base: "http://api.mediastack.com/v1/news?",
  key: process.env.REACT_APP_API_KEY,
};

function Home() {
  const [general, setGeneral] = useState([]);
  const [business, setBusiness] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [health, setHealth] = useState([]);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios
      .all([
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=technology&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=general&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=business&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=entertainment&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=health&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=sports&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
      ])
      .then((res) => {
        // setTechnology(res[0].data.data);
        // setGeneral(res[1].data.data);
        // setBusiness(res[2].data.data);
        // setEntertainment(res[3].data.data);
        // setHealth(res[4].data.data);
        // setSports(res[5].data.data);
      })
      .catch((err) => {
        console.log(err[0]);
      });
  }, []);

  return (
    <>
      <Header />
      <Main
        general={general}
        technology={technology}
        business={business}
        entertainment={entertainment}
        health={health}
        sports={sports}
      />
    </>
  );
}

export default Home;
