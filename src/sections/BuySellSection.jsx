import { useMemo, useState } from "react"

const TABS = {
    BUY: 'Buy',
    SELL: 'Sell'
};

const BuyTab = () => {
    const [atPrice, setAtPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');

    return (
        <div>
            <div className="form">
                <div className="field">
                    <label htmlFor="at-price" className="label">At Price</label>
                    <input 
                        onChange={e => setAtPrice(e.target.value)}
                        className="input" 
                        type="text" 
                        name="at-price" 
                        id="at-price" 
                        value={atPrice} 
                    />
                </div>
                <div className="field">
                    <label htmlFor="amount" className="label">Amount</label>
                    <input 
                        onChange={e => setAmount(e.target.value)}
                        className="input" 
                        type="text" 
                        name="amount" 
                        id="amt" 
                        value={amount} 
                    />
                </div>
                <div className="field">
                    <label htmlFor="total" className="label">Total</label>
                    <input 
                        onChange={e => setTotal(e.target.value)}
                        className="input" 
                        type="text" 
                        name="total" 
                        id="total" 
                        value={total} 
                    />
                </div>
                <button className="button is-primary">BUY</button>
            </div>
        </div>
    );
};

export default function BuySellSection() {
    const [currentTab, setCurrentTab] = useState(TABS.BUY);

    const renderTab = useMemo(() => {
        switch(currentTab) {
            case TABS.BUY:
                return <BuyTab />
            case TABS.SELL:
                return <div>SELL</div>
        }
    }, [currentTab]);

    return (
        <>
        <div className="tabs">
            {
                [TABS.BUY, TABS.SELL].map(tab => {
                    return (
                        <button 
                            key={tab} 
                            className={`button tab${currentTab === tab ? ' active' : ''}`}
                            onClick={() => setCurrentTab(tab)}
                        >
                            {tab}
                        </button>
                    )
                })
            }
        </div>
        {renderTab}
        </>
    )
}