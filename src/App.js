import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Verify from "./Pages/Verify";
import Quiz from "./Pages/Quiz";
import CreateQuiz from "./Pages/CreateQuiz";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/create" element={<CreateQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
