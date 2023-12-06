import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import { currencyPriceObject } from "../assets";

function Row({ currency, price, idx }) {
    return (
        <Tr
            className={`${
                idx % 2 === 0 && "bg-zinc-900"
            } border-2 border-zinc-900`}>
            <Td>
                {idx+1}
            </Td>
            <Td>
                <img src={price.icon} className="scale-150" alt="case-img"></img>
            </Td>
            <Td>{price.name}</Td>
            <Td>
                {(price.buyPrice * currencyPriceObject[currency]).toFixed(2) +
                    currency}
                /
                {(
                    price.buyPrice *
                    price.quantity *
                    currencyPriceObject[currency]
                ).toFixed(2) + currency}
            </Td>
            <Td>
                {(price.buffPrice * currencyPriceObject[currency]).toFixed(2) +
                    currency}
                /
                {(
                    price.buffPrice *
                    price.quantity *
                    currencyPriceObject[currency]
                ).toFixed(2) + currency}
            </Td>
            <Td>
                {(price.steamPrice * currencyPriceObject[currency]).toFixed(2) +
                    currency}
                /
                {(
                    price.steamPrice *
                    price.quantity *
                    currencyPriceObject[currency]
                ).toFixed(2) + currency}
            </Td>
            <Td>{price.quantity}</Td>
            <Td
                className={`${
                    price.profit > 0 ? "text-green-500" : "text-red-500"
                }`}>
                {(price.profit * currencyPriceObject[currency]).toFixed(2) +
                    currency}
            </Td>
            <Td
                className={`${
                    price.roi == "Infinity" ? "text-green-500" : price.roi > 0 ? "text-green-500" : "text-red-500"
                }`}>
                {price.roi}
            </Td>
        </Tr>
    );
}

export default Row;
