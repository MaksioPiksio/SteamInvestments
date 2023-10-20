import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer,} from "@chakra-ui/react"; /*prettier-ignore */

const skins = [921379, 886606, 38148, 45237, 779175, 769121, 763236, 759175, 773524, 894086, 894095, 894283, 894183, 911078, 927991, 927964, 927994, 927964,927994]; /*prettier-ignore */
const buyPriceArray = [5.61, 5.85, 7.85, 3.19, 3.65, 3.43, 3.76, 4.27, 3.46, 5.71, 3.61, 3.41, 3.38, 1.94, 1.53, 1.55, 1.55, 1.75, 1.75]; /*prettier-ignore */
const numberOfSkins = [
    1, 2, 3, 4, 1, 2, 2, 2, 2, 9, 10, 8, 10, 1, 6, 4, 1, 26, 30,
];
console.log(skins.length);
console.log(buyPriceArray.length);
console.log(numberOfSkins.length);
function App() {
    const [prices, setPrices] = useState([]);
    const [profit, setProfit] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const addSkins = (skin, i) => {
        if (prices.length === skins.length) return;
        fetch(`http://localhost:3000/buffData/${skin}`) // Zmieniamy adres URL na serwer proxy
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
                handleSetTotalValue(buffPrice * numberOfSkins[i]); /*prettier-ignore */
            })
            .catch((err) => addSkins(skin, i));
    };
    useEffect(() => {
        skins.forEach((skin, i) => {
            addSkins(skin, i);
        });
    }, []);
    const handleSetProfit = (n) => setProfit((profit) => (parseFloat(profit) + parseFloat(n)).toFixed(2)); /*prettier-ignore */
    const handleSetTotalValue = (n) => setTotalValue((totalValue) => (parseFloat(totalValue) + parseFloat(n)).toFixed(2)); /*prettier-ignore */

    return (
        <>
            <div className="flex justify-center">
                <TableContainer>
                    <Table className="max-w-lg">
                        <Thead>
                            <Tr className="border-2 border-black">
                                <Th>Icon</Th>
                                <Th>Name</Th>
                                <Th>Buy Price</Th>
                                <Th>Buff Price</Th>
                                <Th>Steam Price</Th>
                                <Th>Quantity</Th>
                                <Th>Profit</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {prices.map((price, idx) => (
                                <Tr key={idx} className="border-2 border-black">
                                    <Td>
                                        <img
                                            src={price.icon}
                                            alt="Girl in a jacket"
                                            className="scale-150"></img>
                                    </Td>
                                    <Td>{price.name}</Td>
                                    <Td>
                                        {price.buyPrice}¥/
                                        {(
                                            price.buyPrice * price.quantity
                                        ).toFixed(2)}
                                        ¥
                                    </Td>
                                    <Td>
                                        {price.buffPrice}¥/
                                        {(
                                            price.buffPrice * price.quantity
                                        ).toFixed(2)}
                                        ¥
                                    </Td>
                                    <Td>
                                        {price.steamPrice}¥/
                                        {(
                                            price.steamPrice * price.quantity
                                        ).toFixed(2)}
                                        ¥
                                    </Td>
                                    <Td>{price.quantity}</Td>
                                    {price.profit > 0 ? (
                                        <Td className="text-green-500">
                                            {price.profit}
                                        </Td>
                                    ) : (
                                        <Td className="text-red-500">
                                            {price.profit}
                                        </Td>
                                    )}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <h1 className="text-center border-black border-x-2 border-b-2">
                        Profit: {profit}¥
                        <br />
                        Total Value: {totalValue}¥
                    </h1>
                </TableContainer>
            </div>
        </>
    );
}

export default App;
