import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./contexts/Login/UserContext";
import Context from "./contexts/Dashboard/Context";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const [newReportAction, setNewReportAction] = useState(false);
    const {myUser} = useContext(UserContext);

    useEffect(() => {
        console.log(myUser);
    }, [myUser]);

    return (
        <Context.Provider value={[newReportAction, setNewReportAction]}>
            <AppRoutes />
        </Context.Provider>
    );
}

export default App;
