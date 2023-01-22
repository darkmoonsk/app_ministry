import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />               
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;