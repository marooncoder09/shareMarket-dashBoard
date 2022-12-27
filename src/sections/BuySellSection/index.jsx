import { useMemo, useState } from "react"
import BuyTab from "./BuyTab.jsx";
import SellTab from "./SellTab.jsx";
import { TABS } from "./tabs.js";

export default function BuySellSection() {
    const [currentTab, setCurrentTab] = useState(TABS.BUY);

    const renderTab = useMemo(() => {
        switch(currentTab) {
            case TABS.BUY:
                return <BuyTab />
            case TABS.SELL:
                return <SellTab />
        }
    }, [currentTab]);

    return (
        <>
        <div className="tabs">
            {
                Object.entries(TABS).map(([_, tab]) => {
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