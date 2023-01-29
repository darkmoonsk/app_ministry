import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./contexts/Login/UserContext";
import Context from "./contexts/Dashboard/Context";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const [newReportAction, setNewReportAction] = useState(false);
    const [editReportAction, setEditReportAction] = useState(false);
    const [reportToEdit, setReportToEdit] = useState(null);
    const { myUser } = useContext(UserContext);

    useEffect(() => {
        console.log(myUser);
    }, [myUser]);

    return (
        <Context.Provider
            value={{
                newReportAction,
                setNewReportAction,
                editReportAction,
                setEditReportAction,
                reportToEdit,
                setReportToEdit,
            }}
        >
            <AppRoutes />
        </Context.Provider>
    );
}

export default App;
