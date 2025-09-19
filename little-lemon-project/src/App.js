import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main"; // Import Main for routes
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Main /> {/* Routes are moved here */}
    </Router>
  );
}

export default App;
