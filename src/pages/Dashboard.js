import { auth } from "../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Menu from "../components/dashboard/body/Menu";
import ReportContent from "../components/dashboard/content/ReportContent";
import DashboardContainer from "../components/dashboard/DashboardContainer";

function Dashboard() {
    const [user, loading] = useAuthState(auth);

    if (!loading) {
        if (!user) {
            return <Navigate to="/" />;
        }

        if (user) {
            return (
                <DashboardContainer>
                    <Menu />
                    <ReportContent />
                </DashboardContainer>
            );
        }
    }
}

export default Dashboard;
