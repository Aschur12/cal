import {BrowserRouter, Route} from "react-router-dom";
import { Switch } from "react-router";
import Mainpage from './components/main.js';
import Second from './components/secondpage.js';
// import Threepage from './components/threepage.js';
import "./App.css"
// import NavBar from "./components/navbar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {Mainpage}/>
          <Route path="/reg" exact component = {Second}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
