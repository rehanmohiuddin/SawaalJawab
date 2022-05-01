import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
