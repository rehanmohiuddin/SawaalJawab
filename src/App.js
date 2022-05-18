import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Verify from "./Pages/Verify";
import Quiz from "./Pages/Quiz";
import CreateQuiz from "./Pages/CreateQuiz";
import "./App.scss";
import ProtectedRoute from "./ProtectedRoute";
import UserQuizes from "./Pages/Home/UserQuizes";
import Submission from "./Pages/Home/Submission";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/verify", element: <Verify /> },
    {
      path: "/quiz",
      element: (
        <ProtectedRoute>
          <Quiz />
        </ProtectedRoute>
      ),
    },
    {
      path: "/quiz/create",
      element: (
        <ProtectedRoute>
          <CreateQuiz />
        </ProtectedRoute>
      ),
    },
    {
      path: "/quiz/user",
      element: (
        <ProtectedRoute>
          <UserQuizes />
        </ProtectedRoute>
      ),
    },
    {
      path: "/quiz/submissions",
      element: (
        <ProtectedRoute>
          <Submission />
        </ProtectedRoute>
      ),
    },
  ]);
  return <div className="App">{routes}</div>;
}

export default App;
