import React from "react";
import {Tr,Td} from "@chakra-ui/react"; /*prettier-ignore */
function Row({ price, idx }) {
    return (
        // {idx.profit > 0 ? (
        //     <Td className="text-green-500">{price.profit}</Td>
        // ) : (
        //     <Td className="text-red-500">{price.profit}</Td>
        // )}
        <Tr
            className={`${
                idx % 2 === 0 && "bg-slate-200"
            } border-2 border-black`}>
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
            {price.profit > 0 ? (
                <Td className="text-green-500">{price.profit}</Td>
            ) : (
                <Td className="text-red-500">{price.profit}</Td>
            )}
        </Tr>
    );
}

export default Row;
