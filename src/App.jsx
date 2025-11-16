import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// import your pages
<<<<<<< HEAD
// import OrgLogin from "./pages/org-login.jsx";
import OrgLogin from "./pages/org-login.jsx";
// import Home from "./pages/home.jsx";
// import MyProfile from "./pages/my-profile.jsx";
 import SignIn from "./pages/sign-in.jsx";
=======


import OrgLogin from "./pages/org-login.jsx";
import Home from "./pages/home.jsx";
// import MyProfile from "./pages/my-profile.jsx";
import SignIn from "./pages/sign-in.jsx";
>>>>>>> 3dce0ac958c94c1328f493b2b5ecf17b678c65df
// import ViewProfile from "./pages/profile.jsx";
import CreateProfile from "./pages/create-profile.jsx";
// import AlumniProfile from "./pages/AlumniProfile";
// import About from "./pages/About";
<<<<<<< HEAD
// import CreateProfile from "./pages/create-profile.jsx";
=======
>>>>>>> 3dce0ac958c94c1328f493b2b5ecf17b678c65df

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
=======

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
      
        <Route path="/create-profile" element={<CreateProfile />}/>
=======
>>>>>>> 3dce0ac958c94c1328f493b2b5ecf17b678c65df
        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
<<<<<<< HEAD
        {/*<Route path="/home" element={<Home />}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/> */}
=======
        {/*<Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/>
         */}
>>>>>>> 3dce0ac958c94c1328f493b2b5ecf17b678c65df
      </Routes>
    </BrowserRouter>
  );
}

export default App;