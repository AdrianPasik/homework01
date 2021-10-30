import React, { useEffect, useState } from 'react';
import {Stock} from '../common/Stock';

interface Props {
    searchKey: string;
    onAddStock: (symbol: string, name: string) => void;
}


export const SearchResult = (props: Props) => {
    const initialState: Stock[] = [];
    const [results, setResults] = useState(initialState);

    const onButtonClick = (symbol: string, name: string) => {
        props.onAddStock(symbol, name);
    }

    const getStockResult = async (searchToken: string): Promise<Stock[]> => {
        if(searchToken === '') {
            return [];
        }
        return [{
            symbol: 'test1',
            name: 'test1'
        },
        {
            symbol: 'test2',
                name: 'test2'
        }];
    }

    useEffect(() => {
            (async () => {
                setResults(await getStockResult(props.searchKey));
            })();
        }, [props.searchKey]);

    return (
        <>
            {results.map(element => 
                (<div key={element.symbol}>
                    {element.symbol} {element.name} 
                    <button onClick={() => onButtonClick(element.symbol, element.name)}>Add</button>
                </div>)
                )}
        </>
    );
}