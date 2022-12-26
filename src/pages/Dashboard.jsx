import AppHeader from "../components/AppHeader.jsx";
import LogoutButton from "../components/buttons/LogoutButton.jsx";
import useAuth from "../hooks/use-auth.jsx"

export default function Dashboard() {
    const { currentUser } = useAuth();

    return (
        <div className="container">
            <AppHeader />
            <div className="side-bar">
                <div className="section h-100pc">
                    Sidebar
                </div>
            </div>
            <div className="main">
                <div className="dashboard">
                    <div className="dashboard-sections">
                        <div className="dashboard-section">
                            <div className="bar">
                                <h6 className="section-title">Section 1</h6>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="dashboard-section">
                            <div className="bar">
                                <h6 className="section-title">Section 1</h6>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-sidebar">
                        sidebar
                    </div>
                </div>
            </div>
        </div>
    )
}