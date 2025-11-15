export default function SignIn() {
    return(
            <>
        <div>
        <h1 >networg</h1>
        <div className="page-container">

      <div id="main-card">
        <a href="/">
            <img src="/src/assets/logout.png" className="icon-image"/>
            </a>
        <h2>
          Sign In
        </h2>

       <div className="input-container">
      <div className="input-row">

    <input type="email" id="email" placeholder="Email" />
    </div>

      <div className="input-row">
      <input type="password" id="password" placeholder="Password" />
    </div>
      </div>
        <a
          href="#"
        >
          Forgot Password?
        </a>
        <div></div>
        <a href="/create-profile">
            <button>
              Register
            </button>
        </a>
        <a href="/home">
        <button>
            Sign In
        </button>
        </a>
        

        </div>
      </div>
    </div>
        </>);
}
