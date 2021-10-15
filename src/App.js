import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import "./styles/App.css";
import GlobalStyle from "./styles/Global";
import NotFound from "./Pages/NotFound";

function App() {
  const theme = {
    borderColor: "#BFBFBF",
    hoverColor: "#636262",
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
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={NotFound} path="/not-found" exact />
          <Redirect to="not-found" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
