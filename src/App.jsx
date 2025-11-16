import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import OrgLogin from "./pages/org-login.jsx";
<<<<<<< HEAD
// import Home from "./pages/home.jsx";
// import MyProfile from "./pages/my-profile.jsx";
 import SignIn from "./pages/sign-in.jsx";


import OrgLogin from "./pages/org-login.jsx";
import Home from "./pages/home.jsx";
// import MyProfile from "./pages/my-profile.jsx";
import SignIn from "./pages/sign-in.jsx";

// import ViewProfile from "./pages/profile.jsx";
=======
import SignIn from "./pages/sign-in.jsx";
>>>>>>> eldaah
import CreateProfile from "./pages/create-profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

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
        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
<<<<<<< HEAD
        {/*<Route path="/home" element={<Home />}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/> */}

        {/*<Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/>
         */}
=======
>>>>>>> eldaah
      </Routes>
    </BrowserRouter>
  );
}

export default App;