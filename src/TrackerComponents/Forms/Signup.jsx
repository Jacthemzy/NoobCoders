import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./forms.css";



const SignupPage = () =>{
    const navigate = useNavigate();
    const [{
        fName, 
        lName,
        email,
        password,
        cPassword
    }, setCurrentUser] = useState({fName:"", lName:"", email:"", password:"", cPassword:""});


    const handleSubmit = evt =>{
        evt.preventDefault();
        if(!fName || !lName || !email || !password || !cPassword || !password.length > 6 || !cPassword.length > 6 || password!==cPassword){
            return alert("please check and fill the field(s) apropriately.");
        }

        //use username and password here to handle backend logic
        const userDetails = JSON.stringify({fName,lName,email,password});

        setCurrentUser((prevState) => ({...prevState, fName:"",lName:"",email:"",password:"",cPassword:""}));
        console.log(userDetails)
        //navigate("/login");
    }

    const handChange = evt =>{
        const name = evt.target.name;
        const value = evt.target.value;
        setCurrentUser((prevState) => ({...prevState, [name]:value}));
    }


    return <section className="container">
        <header>
            <h1>Hello There...</h1>
            <p className="f-normal t-gray">
                Sign up to manage and track all your expenses in one place. Happy to have you here.
            </p>
        </header>
        <main>
            <form className="m-t-b" onSubmit={handleSubmit}>

                <div className="fields">
                    <input type="text" name="fName" autoComplete="off"  
                    placeholder="First Name" value={fName} 
                    onChange={(e)=>handChange(e)}/>
                </div>

                <div className="fields">
                    <input type="text" name="lName" autoComplete="off"  
                    placeholder="Last Name" value={lName} 
                    onChange={(e)=>handChange(e)}/>
                </div>

                <div className="fields">
                    <input type="email" name="email" autoComplete="off"  
                    placeholder="Email" value={email} 
                    onChange={(e)=>handChange(e)}/>
                </div>

                <div className="fields">
                    <input type="password" name="password" autoComplete="off"  
                    placeholder="Password" value={password}
                    onChange={(e)=>handChange(e)}/>
                </div>

                <div className="fields">
                    <input type="password" name="cPassword" autoComplete="off"  
                    placeholder="Confirm password" value={cPassword}
                    onChange={(e)=>handChange(e)}/>
                </div>

                <div className="fields">
                    <Link to='/addtransition'>
                     <button className="btn" type="submit">Sign up</button>
                    </Link>
                </div>
                <div className="fields">
                    <p className="f-normal p-t-b">Already have an account? 
                        <Link className="link" to="/Login">Login</Link>
                    </p>
                </div>
            </form>
        </main>
    </section>
}

export default SignupPage;