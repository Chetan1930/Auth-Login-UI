import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = ()=>{
    const {user} = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();

        setUser({...user,[e.target.name]:e.target.value})
    }

return(
    <>
        <form action="\" onSubmit={handleSubmit}>
            <label >Name: </label>
            <input type="text" name="name" placeholder="Chetan Chauhan"/>
            <label >Email: </label>
            <input type="text" name="email" placeholder="Chetan@gmail.com"/>
            <label >phone number: </label>
            <input type="text" name="phone-number" placeholder="9876543210"/>

            <button type="submit">Submit</button>
        </form>
    </>
);
};


export default Login;