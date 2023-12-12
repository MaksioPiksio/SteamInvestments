import { React } from "react";

function TFooter({ profit, currencyPriceObject, totalValue, currency }) {
    return (
        <h1 className="text-center border-zinc-900 border-x-2 border-b-2">
            {profit != undefined ? (
                profit > 0 ? (
                    <span className="text-green-500">
                        Profit:{" "}
                        {(profit * currencyPriceObject[currency]).toFixed(2)}
                        {currency}
                    </span>
                ) : (
                    <span className="text-red-500">
                        Profit:{" "}
                        {(profit * currencyPriceObject[currency]).toFixed(2)}
                        {currency}
                    </span>
                )
            ) : (
                <span>Loading...</span>
            )}
            {" ("}
            {((profit / totalValue) * 100).toFixed(2)}
            %)
            <br />
            Total Value:{" "}
            {(totalValue * currencyPriceObject[currency]).toFixed(2)}
            {currency}
        </h1>
    );
}

export default TFooter;
