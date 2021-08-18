import react from "react";
import Navbar from "./compnents/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar/>
      </Router>
  );
}

export default App;
