import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<SignUp />} />"               
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
