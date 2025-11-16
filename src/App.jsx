import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import OrgLogin from "./pages/org-login.jsx";
import SignIn from "./pages/sign-in.jsx";
import CreateProfile from "./pages/create-profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;