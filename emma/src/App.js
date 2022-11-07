import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="App-link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/error">Error</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/error" element={<Error />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
