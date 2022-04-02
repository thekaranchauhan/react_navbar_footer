import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Instructions } from "./components/Instructions";
import { Terms } from "./components/Terms";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/instructions" component={Instructions} />
            <Route path="/terms" component={Terms} />
          </Switch>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
