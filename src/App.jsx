import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

<<<<<<< HEAD
// import your pages
// import OrgLogin from "./pages/org-login.jsx";
// import OrgLogin from "./pages/org-login.jsx";
// import Home from "./pages/home.jsx";
// import MyProfile from "./pages/my-profile.jsx";
//  import SignIn from "./pages/sign-in.jsx";
// import ViewProfile from "./pages/profile.jsx";
import CreateProfile from "./pages/create-profile.jsx";
// import AlumniProfile from "./pages/AlumniProfile";
// import About from "./pages/About";
// import CreateProfile from "./pages/create-profile.jsx";
=======
import OrgLogin from "./pages/org-login.jsx";
 import Home from "./pages/home.jsx";
// import MyProfile from "./pages/my-profile.jsx";
 import SignIn from "./pages/sign-in.jsx";
// import ViewProfile from "./pages/profile.jsx";
import CreateProfile from "./pages/create-profile.jsx";
// import AlumniProfile from "./pages/AlumniProfile";
>>>>>>> 0c095c72bdb91285dce21a85d73eb30559dc741c

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/> */}
        {/*<Route path="/home" element={<Home />}/>
        <Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/>
        <Route path="/create-profile" element={<CreateProfile />}/> */}
      
              <Route path="/create-profile" element={<CreateProfile />}/>
=======
        <Route path="/" element={<OrgLogin />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/create-profile" element={<CreateProfile />}/>
        {/*<Route path="/my-profile" element={<MyProfile />}/>
        <Route path="/view-profile" element={<ViewProfile />}/>
         */}
>>>>>>> 0c095c72bdb91285dce21a85d73eb30559dc741c

      </Routes>
    </BrowserRouter>
  );
}

export default App;








// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import OrgLogin from './pages/org-login.jsx'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
