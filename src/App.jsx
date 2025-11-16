import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "./pages/profile.css";

// import your pages


// import OrgLogin from "./pages/org-login.jsx";
import Home from "./pages/home.jsx";
import MyProfile from "./pages/my-profile.jsx";
 //import SignIn from "./pages/sign-in.jsx";
 import ViewProfile from "./pages/profile.jsx";
// import CreateProfile from "./pages/create-profile.jsx";
// import AlumniProfile from "./pages/AlumniProfile";
// import About from "./pages/About";

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
        <Route path="/my-profile" element={<MyProfile />}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/> 
         <Route path="/view-profile" element={<ViewProfile />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
        {/*<Route path="/home" element={<Home />}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        {/* <Route path="/" element={<OrgLogin />} /> */}
        {/* <Route path="/sign-in" element={<SignIn />}/>
       
        <Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/>
        <Route path="/create-profile" element={<CreateProfile />}/> */}
      
        {/* <Route path="/create-profile" element={<CreateProfile />}/>

        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/create-profile" element={<CreateProfile />}/> */}
        {/*<Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/>
         */}
        {/* <Route path="/" element={<Profile {...userData} />} /> */}

        {/* <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/create-profile" element={<CreateProfile />}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;