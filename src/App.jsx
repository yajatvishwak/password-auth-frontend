import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthSuccess from "./routes/AuthSuccess";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Verify from "./routes/Verify";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/authsuccess" element={<AuthSuccess />} />
      <Route path="/verify/:id" element={<Verify />} />
    </Routes>
  );
}

export default App;
