import React from 'react';
import { Link } from 'react-router-dom';
import { Stock } from '../common/Stock';

interface Props {
    elements: Stock[];
    onStockDelete: (symbol: string, name: string) => void;
}

export const Portfolio = (props: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Symbol</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                props.elements.map(element => (
                    <tr>
                        <td><Link to={`/details/${element.symbol}`}>{element.name}</Link></td>
                        <td><Link to={`/details/${element.symbol}`}>{element.symbol}</Link></td>
                        <td><button onClick={() => props.onStockDelete(element.symbol, element.name)}>Remove</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};