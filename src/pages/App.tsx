import React, { useState } from 'react';
import { Stock } from '../common/Stock';
import { Portfolio } from './Portfolio';
import { Search } from './Search';

export const App = () => {
    const initialState: Stock[] = [];
    const [stocks, setStocks] = useState(initialState);
    const onAddStock = (symbol: string, name: string) => {
        let localStocks = [...stocks];
        localStocks.push({
            symbol: symbol,
            name: name
        });
        setStocks(localStocks);
    };

    const onRemoveStock = (symbol: string, name: string) => {
        let localStocks = [...stocks.filter(p => (p.name !== name && p.symbol !== symbol))];
        setStocks(localStocks);
    };

    return (
        <>
            <div className="App">
                <div style={{border: `1px solid black`}} className="upperTitle">
                    <div style={{ marginLeft: `1em`, height: `3em`, verticalAlign: `middle`}}>
                        <div style={{marginTop: `1em`}}>
                            <span style={{fontSize: `2em`}}>SDH Frontend Homework</span>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <div style={{paddingTop: `1em`}}>
                        <Search
                            onAddStock={onAddStock}
                        />
                    </div>
                    
                </div>
                <div className="portfolio">
                    <Portfolio
                        elements={stocks}
                        onStockDelete={onRemoveStock}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
