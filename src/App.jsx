import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer,} from "@chakra-ui/react"; /*prettier-ignore */
import { buyPriceArray, numberOfSkins, skins, headers } from "./assets";
import Row from "./components/Row";

let flag = false;
function App() {
    const [prices, setPrices] = useState([]);
    const [profit, setProfit] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const addSkins = (skin, i) => {
        if (prices.length === skins.length) return;
        fetch(import.meta.env.VITE_SERVER_URL + skin)
            .then((response) => response.json())
            .then((data) => {
                let steamPrice = data.data.goods_infos[skin].steam_price_cny;
                let buffPrice = data.data.items[0].price;

                setPrices((prices) => [
                    ...prices,
                    {
                        index: prices.length + 1,
                        name: data.data.goods_infos[skin].market_hash_name,
                        skin: skin,
                        icon: data.data.goods_infos[skin].icon_url,
                        buffPrice: buffPrice,
                        steamPrice: steamPrice,
                        buyPrice: buyPriceArray[i],
                        quantity: numberOfSkins[i],
                        profit: ( buffPrice * numberOfSkins[i] - buyPriceArray[i] * numberOfSkins[i] ).toFixed(2) /*prettier-ignore */,
                    },
                ]);

                handleSetProfit(( buffPrice * numberOfSkins[i] - buyPriceArray[i] * numberOfSkins[i]).toFixed(2)); /*prettier-ignore */
                handleSetTotalValue(buffPrice * numberOfSkins[i]);
            })
            .catch((err) => addSkins(skin, i));
    };
    useEffect(() => {
        if (!flag) skins.forEach((skin, i) => addSkins(skin, i));
        flag = true;
    }, []);
    // useEffect(() => {
    //     if (prices.length === skins.length) {
    //
    //     }
    // }, [prices]);
    const handleSort = (name) => {
        const arr = [...prices];
        if (typeof name === "number") arr.sort((a, b) => a[name] - b[name]);
        if (typeof name === "string") arr.sort();
        setPrices(arr);
    };

    const handleSetProfit = (n) => setProfit((profit) => (parseFloat(profit) + parseFloat(n)).toFixed(2)); /*prettier-ignore */
    const handleSetTotalValue = (n) => setTotalValue((totalValue) => (parseFloat(totalValue) + parseFloat(n)).toFixed(2)); /*prettier-ignore */

    return (
        <>
            <div className="flex justify-center">
                <TableContainer>
                    <Table className="max-w-lg">
                        <Thead>
                            <Tr className="border-2 border-black">
                                {headers.map((name, idx) => (
                                    <Th
                                        key={idx}
                                        onClick={() => handleSort(name)}>
                                        {name}
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {prices.map((price, idx) => (
                                <Row price={price} key={idx} />
                            ))}
                        </Tbody>
                    </Table>
                    <h1 className="text-center border-black border-x-2 border-b-2">
                        {profit != undefined ? (
                            profit > 0 ? (
                                <span className="text-green-500">
                                    Profit: {profit}¥
                                </span>
                            ) : (
                                <span className="text-red-500">
                                    Profit: {profit}¥
                                </span>
                            )
                        ) : (
                            <span>Loading...</span>
                        )}
                        ( {((profit / totalValue) * 100).toFixed(2)}% )
                        <br />
                        Total Value: {totalValue}¥
                    </h1>
                </TableContainer>
            </div>
        </>
    );
}

export default App;
