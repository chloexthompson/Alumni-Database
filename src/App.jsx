import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "./pages/profile.css";

import OrgLogin from "./pages/org-login.jsx";
import SignIn from "./pages/sign-in.jsx";
import CreateProfile from "./pages/create-profile.jsx";
import Profile from "./pages/profile.jsx";

function App() {
  const userData = {
    firstName: "Alex",
    lastName: "Wang",
    major: "Finance",
    gradYear: 2027,
    referralStatus: "Pending",
    description: "This is a short profile description about Alex Wang.",
    skills: ["Mathamatics", "Finance Bro", "Investing"]
  };
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Profile {...userData} />} /> */}
        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;