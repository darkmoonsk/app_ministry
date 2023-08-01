import { auth } from "../infra/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Menu from "../components/dashboard/menu/Menu";
import ReportContent from "../components/dashboard/content/ReportContent";
import DashboardContainer from "../components/dashboard/DashboardContainer";
import DashboardFilters from "../components/dashboard/DashboardFilters";
import ContentContainer from "../components/dashboard/ContentContainer";
import FilterProvider from "../contexts/Filters/FiltersContext";

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
                    <ContentContainer>
                        <FilterProvider>
                            <DashboardFilters />
                            <ReportContent />
                        </FilterProvider>
                    </ContentContainer>
                </DashboardContainer>
            );
        }
    } else {
        return (
            <DashboardContainer>
                
            </DashboardContainer>
        )
    }
}

export default Dashboard;
