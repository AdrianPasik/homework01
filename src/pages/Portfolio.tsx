import React from 'react';
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
                        <td>{element.name}</td>
                        <td>{element.symbol}</td>
                        <td><button onClick={() => props.onStockDelete(element.name, element.symbol)}>Remove</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};