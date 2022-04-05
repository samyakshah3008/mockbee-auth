import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
export function LandingPage(){
    const {user, setUser} = useAuth()
    console.log(user)
    return(
        <div> 
            <h1>Home</h1>
            <h2>Hi {user?.user?.firstName ? user?.user?.firstName : "Guest"}</h2>
            <nav>
                <Link to="/about">About</Link>
                {" | "}
                <Link to="/user-info">User Info Private Page</Link>
               
               {!user.user ? <div style={{marginTop: "2rem"}}>
                <Link to="/login">Login</Link>
                {" | "}
                <Link to="/signup">Sign up</Link>
                </div> : <div style={{marginTop: "2rem"}}><button onClick={() => setUser({ user: null, token: null })}>Log out</button></div>} 
                
            </nav>
        

        </div>
    )
}