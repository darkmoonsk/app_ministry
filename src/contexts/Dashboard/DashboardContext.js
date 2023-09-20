import { createContext, useState } from "react";

export const DashboardContext = createContext();

export default function DashboardProvider(props) {
    const [newReportAction, setNewReportAction] = useState(false);
    const [editReportAction, setEditReportAction] = useState(false);
    const [addHoursAction, setAddHoursAction] = useState(false);
    const [reportToEdit, setReportToEdit] = useState(null);

    return (
        <DashboardContext.Provider
        value={{
                    newReportAction,
                    setNewReportAction,
                    editReportAction,
                    setEditReportAction,
                    reportToEdit,
                    setReportToEdit,
                    addHoursAction,
                    setAddHoursAction
                }}
        >
            { props.children }
        </DashboardContext.Provider>
    );
}