import React from "react";
import { Tr, Td } from "@chakra-ui/react";

function Row({ price, idx }) {
    return (
        <Tr
            className={`${
                idx % 2 === 0 && "bg-zinc-900"
            } border-2 border-zinc-900`}>
            <Td>
                <img src={price.icon} className="scale-150"></img>
            </Td>
            <Td>{price.name}</Td>
            <Td>
                {price.buyPrice}¥/
                {(price.buyPrice * price.quantity).toFixed(2)}¥
            </Td>
            <Td>
                {price.buffPrice}¥/
                {(price.buffPrice * price.quantity).toFixed(2)}¥
            </Td>
            <Td>
                {price.steamPrice}¥/
                {(price.steamPrice * price.quantity).toFixed(2)}¥
            </Td>
            <Td>{price.quantity}</Td>
            <Td
                className={`${
                    price.profit > 0 ? "text-green-500" : "text-red-500"
                }`}>
                {price.profit.toFixed(2)}
            </Td>
        </Tr>
    );
}

export default Row;
