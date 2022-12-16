import { Routes,Route } from "react-router-dom";
import AddNewProduct from "../Components/AdminPanel/AddNewProduct/AddNewProduct";
import AddUser from "../Components/AdminPanel/AddNewProduct/AddUser";
import AdminPanel from "../Components/AdminPanel/AdminPanel";
import Login from "../Components/Login/Login";
import LoginUserPass from "../Components/Login/LoginUserPass";
import Signup from "../Components/Signup/Signup";

function MainRoutes(){
    return <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/myntra" element={<h1>Myntra</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/loginuser" element={<LoginUserPass/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/addnewproduct" element={<AddNewProduct/>} />
        <Route path="/addnewuser" element={<AddUser/>} />
    </Routes>
}

export default MainRoutes;
