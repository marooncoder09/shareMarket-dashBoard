import { useContext, useEffect } from "react";
import CandleStickChart from "../components/charts/CandleStickChart.jsx";
import { chart } from "../shared/data.js";
import { StoreContext } from "../store/store-context.js";

export default function SelectedStock() {
    const [state, dispatch] = useContext(StoreContext);

    return (
        <div className="section flex-1">
            <div className="bar">
                <h6 className="section-title">{state.selectedStock}</h6>
            </div>
            <div>
                <CandleStickChart
                    title="Test"
                    series={chart.series} 
                />
            </div>
        </div>
    )
};