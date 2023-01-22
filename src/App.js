import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "./contexts/Login/AppContext";
import Context from "./contexts/Dashboard/Context";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const [newReportAction, setNewReportAction] = useState(false);
    const {myUser} = useContext(MyContext);

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
