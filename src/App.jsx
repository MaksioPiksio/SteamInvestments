import { useState, useEffect } from "react";
import { useToast, Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react"; /*prettier-ignore */
import { skinData, headers,currencyArray, currencyPriceObject } from "./assets"; /*prettier-ignore */
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import Tfooter from "./components/Tfooter";

console.log(skinData[0]);
let flag = false;
function App() {
    const [prices, setPrices] = useState([]);
    const [selectedHeader, setSelectedHeader] = useState("");
    const [profit, setProfit] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [currency, setCurrency] = useState(" ¥");
    const toast = useToast();

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
                        buyPrice: skinData[i].buyPrice,
                        quantity: skinData[i].quantity,
                        profit: parseFloat(( buffPrice * skinData[i].quantity - skinData[i].buyPrice * skinData[i].quantity ).toFixed(2)) /*prettier-ignore */,
                        roi: (((buffPrice - skinData[i].buyPrice) / skinData[i].buyPrice) * 100).toFixed(2) /*prettier-ignore */,
                    },
                ]);
                handleSetProfit(( buffPrice * skinData[i].quantity - skinData[i].buyPrice * skinData[i].quantity)); /*prettier-ignore */
                handleSetTotalValue(buffPrice * skinData[i].quantity);
            })
            .catch((err) => addSkins(skin, i));
    };

    useEffect(() => {
        if (!flag) skinData.forEach((skin, i) => addSkins(skin.id, i));
        flag = true;
    }, []);

    useEffect(() => {
        if (skinData.length == prices.length)
            toast({
                title: "Skins were loaded",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
    }, [prices]);

    const handleSort = (name) => {
        if (name === "icon" || name === " ") return;

        const arr = [...prices];

        arr.sort((a, b) => {
            if (name === "name") {
                return a[name].localeCompare(b[name]);
            } else {
                const aValue =
                    typeof a[name] === "number" ? a[name] : parseFloat(a[name]);
                const bValue =
                    typeof b[name] === "number" ? b[name] : parseFloat(b[name]);
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
            <Navbar
                currencyArray={currencyArray}
                currency={currency}
                setCurrency={setCurrency}
            />
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
                    <Tfooter
                        profit={profit}
                        currencyPriceObject={currencyPriceObject}
                        totalValue={totalValue}
                        currency={currency}
                    />
                </TableContainer>
            </div>
        </>
    );
}

export default App;
