import Stock from "../components/Stock.jsx";

const stocks = [
    {
        id: 'APPL',
        name: 'Apple',
        purchasePrice: 100,
        currentPrice: 110,
        trend: 'up',
        holding: 5
    },
    {
        id: 'FB',
        name: 'Facebook',
        purchasePrice: 100,
        currentPrice: 10,
        trend: 'down',
        holding: 5
    },
];

export default function MyStocks() {
    return (
        <div className="holdings">
            {
                stocks.map(stock => <Stock key={stock.id} stock={stock} />)
            }
        </div>
    )
}