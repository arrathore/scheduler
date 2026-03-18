import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Scheduler from "./pages/Scheduler";

function App() {
    return (
<Router>
  <Routes>
    <Route path="/" element={<Scheduler />} />
  </Routes>
</Router>
    );
}

export default App;
