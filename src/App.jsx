import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/lo" element={<Layout />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
