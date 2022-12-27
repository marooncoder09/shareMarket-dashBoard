import AppHeader from "../components/AppHeader.jsx";
import useAuth from "../hooks/use-auth.jsx"

import BuySellSection from "../sections/BuySellSection.jsx";
import MyStocks from "../sections/MyStocks.jsx";
import LineChart from "../components/charts/LineGraph.jsx";
import { useContext } from "react";
import { StoreContext } from "../store/store-context.js";
import SelectedStock from "../sections/SelectedStock.jsx";

export default function Dashboard() {
    const { currentUser } = useAuth();

    const [state, dispatch] = useContext(StoreContext);

    return (
        <div className="container">
            <AppHeader />
            <div className="side-bar">
                <div className="section h-100pc">
                  <div className="bar">My Stocks</div>
                  <MyStocks />
                </div>
            </div>
            <div className="main">
                <div className="dashboard">
                    <div className="dashboard-sections">
                        <SelectedStock />
                        <div className="section dashboard-section">
                            <div className="bar">
                                <h6 className="section-title">Section 1</h6>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section dashboard-sidebar">
                        <BuySellSection />
                    </div>
                </div>
            </div>
        </div>
    )
}