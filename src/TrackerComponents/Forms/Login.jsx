import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./forms.css";



const LoginPage = () =>{
    const navigate = useNavigate();
    const [{username, password}, setCurrentUser] = useState({username:"", password:""});


    const handleSubmit = evt =>{
        evt.preventDefault();
        if(!username || !password || password.length < 6 ){
            return alert("please enter a correct login information");
        }

        //use username and password here to handle backend logic
        const userLogins = JSON.stringify({username, password});


        //this line is a to test the web app functionality, delete when implementing backend
        sessionStorage.setItem("token", userLogins);
        navigate("/transition-page");


        setCurrentUser((prevState) => ({...prevState, username:"", password:""}));
    }

    const handleChange = evt =>{
        const name = evt.target.name;
        const value = evt.target.value;
        setCurrentUser((prevState) => ({...prevState, [name]:value}));
    }


    return <section className="container">
        <header>
            <h1>Welcome User</h1>
            <p className="f-normal t-gray">
                Login to your account and start tracking your expenses.
            </p>
        </header>
        <main>
            <form className="m-t-b" onSubmit={handleSubmit}>

                <div className="fields">
                    <label className="f-normal" htmlFor="username">Username</label><br/>
                    <input type="text" name="username" autoComplete="off"  
                    placeholder="Enter username" id="username" value={username} 
                    onChange={(e)=>handleChange(e)}/>
                </div>

                <div className="fields">
                    <label className="f-normal" htmlFor="password">Password</label><br/>
                    <input type="password" name="password" autoComplete="off"  
                    placeholder="Enter password" id="password" value={password}
                    onChange={(e)=>handleChange(e)}/>
                </div>

                <div className="fields">
                    <p className="link f-normal">Forgot password?</p>
                </div>

                <div className="fields">
                   <button className="btn" type="submit">Login</button>
                </div>
                
                <div className="fields">
                    <p className="f-normal p-t-b">Don't have an account? 
                        <Link className="link" to="/signup">Sign Up</Link>
                    </p>
                </div>
            </form>
        </main>
    </section>
}

export default LoginPage;