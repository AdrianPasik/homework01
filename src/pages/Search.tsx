import React, { ChangeEvent } from 'react';
import {useState} from 'react';
import { SearchResult } from './SearchResult';

interface Props {
    onAddStock: (symbol: string, name: string) => void;
}

export const Search = (props: Props) => {
    const [searchToken, setSearchToken] = useState("");

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchToken(event.target.value);
    }

    const onAddStock = (symbol: string, name: string) => {
        props.onAddStock(symbol, name);
    }
    return (
        <>
            <div style={{flexDirection: 'column', display:'flex', width: `30em`}}>
                <label style={{paddingBottom: `1em`}} htmlFor="searchBox"> Company Name </label>
                <input  type='text' id="searchBox" value={searchToken} onChange={onInputChange} placeholder='Example Apple' />
            </div>
            <div>
            <SearchResult 
                searchKey={searchToken}
                onAddStock={onAddStock}
            />
            </div>
        </>
    );
}