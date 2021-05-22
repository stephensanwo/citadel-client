import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <Switch />
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:q" component={Search} />
      <Switch />
    </Router>
  );
}

export default App;
