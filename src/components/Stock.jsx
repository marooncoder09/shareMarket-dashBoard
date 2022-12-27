const formatHolding = holding => {
    return `${holding} Stock${holding === 1 ? '' : 's'}`
};

export default function Stock({ stock }) {
    return (
        <div className={`stock trend-${stock.trend} flex p-1rem jc-between`}>
            <div className="flex dir-column g-0_5rem">
                <span className="text-bold">{stock.name}</span>
                <span className="text-secondary text-small">{formatHolding(stock.holding)}</span>
            </div>
            <div className={`stock-price trend-${stock.trend}`}>
                {stock.currentPrice}
            </div>
        </div>
    )
}