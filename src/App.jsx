import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading....</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading....</div>}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function RouterBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}

export default App;
