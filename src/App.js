import { useEffect, useContext } from "react";
import UserContext from "./contexts/Login/UserContext";
import AppRoutes from "./routes/AppRoutes";
import DashboardProvider from "./contexts/Dashboard/DashboardContext";

function App() {
    const { myUser } = useContext(UserContext);

    useEffect(() => {
        console.log(myUser);
    }, [myUser]);

    return (
        <DashboardProvider>
            <AppRoutes />
        </DashboardProvider>
    );
}

export default App;
