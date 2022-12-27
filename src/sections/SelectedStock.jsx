import { useContext, useEffect, useRef, useState } from "react";
import CandleStickChart from "../components/charts/CandleStickChart.jsx";
import { StoreContext } from "../store/store-context.js";

import { getStock } from "../services/stock-price.js";

export default function SelectedStock() {
    const [state, dispatch] = useContext(StoreContext);

    const [series, setSeries] = useState([]);
    
    const [loading, setLoading] = useState(true);

    const timeOutRef = useRef();

    const fetchStockData = async () => {
        try {
            const data = await getStock(state.selectedStock);
            
            const timeSeries = Object.entries(data['Time Series (1min)']).map(([time, data]) => {
                const open = parseFloat(data["1. open"]);
                const high = parseFloat(data["2. high"]);
                const low = parseFloat(data["3. low"]);
                const close = parseFloat(data["4. close"]);

                return {
                    x: new Date(time),
                    y: [open, high, low, close]
                }
            });

            setSeries([{
                data: timeSeries
            }]);
        } catch(e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(!state.selectedStock) {
            return;
        }

        setLoading(true);

        fetchStockData();

        timeOutRef.current = setInterval(fetchStockData, 1000 * 60);

        return () => clearInterval(timeOutRef.current);
    }, [state.selectedStock]);

    return (
        <div className="section flex dir-column flex-1">
            <div className="bar">
                <h6 className="section-title">{state.selectedStock}</h6>
            </div>
            {
                loading
                    ? (
                        <div className="flex jc-center ai-center flex-1">
                            <span className="spinner small"></span>
                        </div>
                    )
                    : (
                        <div className="flex-1">
                            <CandleStickChart
                                title="Test"
                                series={series} 
                            />
                        </div>
                    )
            }
        </div>
    )
};