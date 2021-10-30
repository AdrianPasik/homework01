import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

type DetailsParams = {
    name: string;
};

interface Details {
    name: string;
    address: string;
    capitalization: string;
    description: string;
}

let details: Details[] = [
    {
        name: 'AAPL',
        address: 'Cupertino',
        capitalization: '1 bn',
        description: 'iMac creators'
    },
    {
        name: 'MSFT',
        address: 'Redmond',
        capitalization: '2 bn',
        description: 'Windows creators'
    },
    {
        name: 'Unknown stock',
        address: 'Unknown',
        capitalization: 'Unknown',
        description: 'Unknown'
    }
]

export const StockDetails = () => {
    const { name } = useParams<DetailsParams>();
    const history = useHistory();


    const resolveStockDetailsBasedOnName = (stockName: string): Details => {
        let stock = details.filter(p => p.name === stockName);
        if (stock.length === 0) {
            return details[2];
        } else {
            return stock[0];
        }
    };

    const displayStock = resolveStockDetailsBasedOnName(name);

    return (
        <>
        <div style={{padding: `1em`}}>
            <button onClick={() => history.goBack()}>Go Back</button>
            <div style={{paddingBottom: `1em`}}></div>
            <h1 style={{paddingBottom: `1em`}}>{displayStock.name}</h1>
            <p style={{paddingBottom: `1em`}}><strong>Address:</strong>{displayStock.address}</p>
            <p style={{paddingBottom: `1em`}}><strong>Market Capitalization:</strong>{displayStock.capitalization}</p>
            <p style={{paddingBottom: `1em`}}>{displayStock.description}</p>
        </div>
            
        </>
    );
}