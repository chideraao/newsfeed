/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `${api.base}access_key=${api.key}&categories=technology&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        ),
        axios.get(
          `${api.base}access_key=${api.key}&categories=general&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=business&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=entertainment&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=science&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
        // axios.get(
        //   `${api.base}access_key=${api.key}&categories=sports&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
        // ),
      ])
      .then((res) => {
        setTechnology(res[0].data.data);
        setGeneral(res[1].data.data);
        // setBusiness(res[2].data.data);
        // setEntertainment(res[3].data.data);
        // setHealth(res[4].data.data);
        // setSports(res[5].data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err[0]);
      });
  }, []);

  return (
    <div>
      <Header />
      {!loading ? (
        <>
          <Main
            general={general}
            technology={technology}
            business={business}
            entertainment={entertainment}
            health={health}
            sports={sports}
          />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;

// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Main from "../components/Main";

// const api = {
//   base: "http://api.mediastack.com/v1/news?",
//   key: process.env.REACT_APP_API_KEY,
// };

// function Home() {
//   const [general, setGeneral] = useState([]);
//   const [business, setBusiness] = useState([]);
//   const [technology, setTechnology] = useState([]);
//   const [entertainment, setEntertainment] = useState([]);
//   const [health, setHealth] = useState([]);
//   const [sports, setSports] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .all([
//         axios.get(
//           `/api/news?access_key=${api.key}&categories=technology&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
//         ),
//         axios.get(
//           `/api/news?access_key=${api.key}&categories=general&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
//         ),
//         // axios.get(
//         //   `${api.base}access_key=${api.key}&categories=business&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
//         // ),
//         // axios.get(
//         //   `${api.base}access_key=${api.key}&categories=entertainment&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
//         // ),
//         // axios.get(
//         //   `${api.base}access_key=${api.key}&categories=science&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
//         // ),
//         // axios.get(
//         //   `${api.base}access_key=${api.key}&categories=sports&languages=en&countries=us,gb,de,au,ca,fr&limit=100`
//         // ),
//       ])
//       .then((res) => {
//         setTechnology(res[0].data.data);
//         setGeneral(res[1].data.data);
//         // setBusiness(res[2].data.data);
//         // setEntertainment(res[3].data.data);
//         // setHealth(res[4].data.data);
//         // setSports(res[5].data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err[0]);
//       });
//   }, []);

//   return (
//     <div>
//       <Header />
//       {!loading ? (
//         <>
//           <Main
//             general={general}
//             technology={technology}
//             business={business}
//             entertainment={entertainment}
//             health={health}
//             sports={sports}
//           />
//           <Footer />
//         </>
//       ) : (
//             <Loader/>
//       )}
//     </div>
//   );
// }

// export default Home;
