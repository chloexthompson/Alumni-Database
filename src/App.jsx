import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

<<<<<<< HEAD
// import your pages


// import OrgLogin from "./pages/org-login.jsx";
// import Home from "./pages/home.jsx";
import MyProfile from "./pages/my-profile.jsx";
// import SignIn from "./pages/sign-in.jsx";
// import ViewProfile from "./pages/profile.jsx";
// import CreateProfile from "./pages/create-profile.jsx";
// import AlumniProfile from "./pages/AlumniProfile";
// import About from "./pages/About";
=======
import OrgLogin from "./pages/org-login.jsx";
import SignIn from "./pages/sign-in.jsx";
import CreateProfile from "./pages/create-profile.jsx";
>>>>>>> f3069b2c420dbec1694deb4657ffc85bce963f1a

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/my-profile" element={<MyProfile />}/>
        {/* <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/> */}
        {/*<Route path="/home" element={<Home />}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        {/* <Route path="/" element={<OrgLogin />} /> */}
        {/* <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/home" element={<Home />}/>
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
=======
        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
>>>>>>> f3069b2c420dbec1694deb4657ffc85bce963f1a
      </Routes>
    </BrowserRouter>
  );
}

export default App;