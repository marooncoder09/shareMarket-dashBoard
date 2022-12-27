import { useContext, useEffect } from "react";
import Stock from "../components/Stock.jsx";
import { SELECT_STOCK } from "../store/actions.js";
import { StoreContext } from "../store/store-context.js";

const stocks = [
    {
        id: 'TATAMOTORS',
        name: 'Tata Motors',
        purchasePrice: 100,
        currentPrice: 110,
        trend: 'up',
        holding: 5
    },
    {
        id: 'PAYTM',
        name: 'PayTM',
        purchasePrice: 100,
        currentPrice: 10,
        trend: 'down',
        holding: 5
    },
];

export default function MyStocks() {
    const [state, dispatch] = useContext(StoreContext);

    useEffect(() => {
        dispatch({
            type: SELECT_STOCK,
            payload: stocks[0]?.id
        });
    }, []);

    return (
        <div className="holdings">
            {
                stocks.map(stock => <Stock key={stock.id} stock={stock} />)
            }
        </div>
    )
}