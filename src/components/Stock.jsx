import { useContext, useMemo } from "react";
import { currencyFormatter, percentageFormatter } from "../lib/formatters.js";
import { SELECT_STOCK } from "../store/actions.js";
import { StoreContext } from "../store/store-context.js";
import ArrowDownIcon from "./icons/ArrowDownIcon.jsx";
import ArrowUpIcon from "./icons/ArrowUpIcon.jsx";

const formatHolding = holding => {
    return `${holding} Stock${holding === 1 ? '' : 's'}`
};

const calculateGain = (currentPrice, purchasePrice) => {
    const diff = currentPrice - purchasePrice;
    const percentage = diff / purchasePrice;

    return percentage;
};

export default function Stock({ stock }) {
    const [state, dispatch] = useContext(StoreContext);

    const gain = useMemo(() => {
        return calculateGain(stock.currentPrice, stock.purchasePrice);
    }, [stock.currentPrice, stock.purchasePrice]);

    const handleSelect = () => {
        dispatch({
            type: SELECT_STOCK,
            payload: stock.id
        });
    };

    return (
        <div onClick={handleSelect} className={`stock trend-${stock.trend} flex p-1rem jc-between${state.selectedStock === stock.id ? ' selected' : ''}`}>
            <div className="flex dir-column g-0_5rem">
                <span className="text-bold">{stock.name}</span>
                <span className="text-secondary text-small">{formatHolding(stock.holding)}</span>
            </div>
            <div className='inline-flex dir-column g-0_5rem ai-center'>
                {currencyFormatter.format(stock.currentPrice)}
                <span className={`inline-flex text-small trend-text trend-${gain > 0 ? 'up' : 'down'}`}>
                    {
                        gain > 0
                            ? <ArrowUpIcon width={16} height={16} />
                            : <ArrowDownIcon width={16} height={16} />
                    }
                    {percentageFormatter.format(gain)}
                </span>
            </div>
        </div>
    )
}