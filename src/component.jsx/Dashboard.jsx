import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "./login";

const Dashboard = ()=>{

    const {user,isauth,logout} = useContext(AuthContext);

return(
    <>
        (isauth ? {<h1>Welcome {user.name}</h1>} {" "} {<button onClick={logout}>Logout</button>}: <Login/>)
        
    </>
);
};


export default Dashboard;