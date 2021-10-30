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
            <button onClick={() => history.goBack()}>Go Back</button>
            <h1>{displayStock.name}</h1>
            <p><strong>Address:</strong>{displayStock.address}</p>
            <p><strong>Market Capitalization:</strong>{displayStock.capitalization}</p>
            <p>{displayStock.description}</p>
        </>
    );
}