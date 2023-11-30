import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button} from "@chakra-ui/react"; /*prettier-ignore */
import { buyPriceArray, numberOfSkins, skins, headers,currencyArray, currencyPriceObject } from "./assets"; /*prettier-ignore */
import Row from "./components/Row";

let flag = false;
console.log(skins.length);
console.log(buyPriceArray.length);
console.log(numberOfSkins.length);
function App() {
    const [prices, setPrices] = useState([]);
    const [selectedHeader, setSelectedHeader] = useState("");
    const [profit, setProfit] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [currency, setCurrency] = useState(" RMB");

    const addSkins = (skin, i) => {
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
                        buffPrice: parseFloat(buffPrice),
                        steamPrice: parseFloat(steamPrice),
                        buyPrice: buyPriceArray[i],
                        quantity: numberOfSkins[i],
                        profit: parseFloat(( buffPrice * numberOfSkins[i] - buyPriceArray[i] * numberOfSkins[i] ).toFixed(2)) /*prettier-ignore */,
                        roi: ((buffPrice - buyPriceArray[i]) / buyPriceArray[i] * 100).toFixed(2),
                    },
                ]);

                handleSetProfit(( buffPrice * numberOfSkins[i] - buyPriceArray[i] * numberOfSkins[i])); /*prettier-ignore */
                handleSetTotalValue(buffPrice * numberOfSkins[i]);
            })
            .catch((err) => addSkins(skin, i));
    };
    useEffect(() => {
        if (!flag) skins.forEach((skin, i) => addSkins(skin, i));
        flag = true;
    }, []);

    const handleSort = (name) => {
      if (name === "icon") return;
    
      const arr = [...prices];
    
      arr.sort((a, b) => {
        if (name === "name") {
          return a[name].localeCompare(b[name]);
        } else {
          const aValue = typeof a[name] === "number" ? a[name] : parseFloat(a[name]);
          const bValue = typeof b[name] === "number" ? b[name] : parseFloat(b[name]);
          return aValue - bValue;
        }
      });
    
      setSelectedHeader(name);
    
      if (selectedHeader === name) {
        arr.reverse();
        setSelectedHeader(name + 1);
      }
    
      setPrices(arr);
    };


    const handleSetProfit = (n) => setProfit((profit) => (parseFloat(profit) + parseFloat(n)).toFixed(2)); /*prettier-ignore */
    const handleSetTotalValue = (n) => setTotalValue((totalValue) => (parseFloat(totalValue) + parseFloat(n)).toFixed(2)); /*prettier-ignore */

    return (
        <>
            <div className=" w-screen flex justify-center m-4 gap-4">
                {currencyArray.map((name, idx) => (
                    <button
                        onClick={() => setCurrency(name)}
                        className={`text-white ${
                            name == currency && "bg-zinc-900"
                        } py-2 px-4 rounded text-center cursor-pointer`}
                        key={idx}>
                        {name}
                    </button>
                ))}
            </div>
            <div className="flex justify-center text-white">
                <TableContainer>
                    <Table className="max-w-lg">
                        <Thead>
                            <Tr className="border-2 border-zinc-900">
                                {headers.map((name, idx) => (
                                    <Th
                                        color={"white"}
                                        key={idx}
                                        onClick={() => handleSort(name)}
                                        className={`cursor-pointer hover:bg-zinc-900 transition duration-200 ${
                                            selectedHeader == name
                                                ? "bg-zinc-700"
                                                : selectedHeader == name + 1 &&
                                                  "bg-zinc-700"
                                        }`}>
                                        <div className="flex items-center justify-between">
                                            {name}
                                            {selectedHeader == name ? (
                                                <i className="fa-solid fa-arrow-down-short-wide"></i>
                                            ) : (
                                                selectedHeader == name + 1 && (
                                                    <i className="fa-solid fa-arrow-up-wide-short"></i>
                                                )
                                            )}
                                        </div>
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {prices.map((price, idx) => (
                                <Row
                                    currency={currency}
                                    price={price}
                                    idx={idx}
                                    key={idx}
                                />
                            ))}
                        </Tbody>
                    </Table>
                    <h1 className="text-center border-zinc-900 border-x-2 border-b-2">
                        {profit != undefined ? (
                            profit > 0 ? (
                                <span className="text-green-500">
                                    Profit:{" "}
                                    {(
                                        profit * currencyPriceObject[currency]
                                    ).toFixed(2)}
                                    {currency}
                                </span>
                            ) : (
                                <span className="text-red-500">
                                    Profit:{" "}
                                    {(
                                        profit * currencyPriceObject[currency]
                                    ).toFixed(2)}
                                    {currency}
                                </span>
                            )
                        ) : (
                            <span>Loading...</span>
                        )}
                        {" ("}
                        {(
                            (profit / totalValue) * 100
                        ).toFixed(2)}
                        %)
                        <br />
                        Total Value:{" "}
                        {(totalValue * currencyPriceObject[currency]).toFixed(
                            2
                        )}
                        {currency}
                    </h1>
                </TableContainer>
            </div>
        </>
    );
}

export default App;
