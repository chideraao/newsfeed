import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./styles/App.css";
import GlobalStyle from "./styles/Global";

function App() {
  const theme = {
    borderColor: "#B3B3B3",
    hoverColors: [
      "rgb(157, 213, 216)",
      "#0FB197",
      "rgb(65, 39, 75)",
      "#1F849F",
      "#FFC036",
      "#778a74",
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Route component={Home} path="/" exact />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
