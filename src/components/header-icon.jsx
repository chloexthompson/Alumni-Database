export default function Header(){
    return(
        <div className="header-icons">
                <div className="icon-container">
                    <a href="/sign-in"> 
                          <img src="https://cdn-icons-png.flaticon.com/128/1286/1286853.png" alt="logout" />
                    </a>

                    <a href="/my-profile">
                    <img src="https://cdn-icons-png.flaticon.com/128/15753/15753894.png" alt="profile" /></a>
                    
                    <a href="/home">
                         <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="home" />
                    </a>
                   
                </div>
            </div>
    )
}