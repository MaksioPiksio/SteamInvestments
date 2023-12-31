import { useState, useEffect } from "react";
import { useToast, Table, TableContainer } from "@chakra-ui/react"; /*prettier-ignore */
import { skinData, headers,currencyArray, currencyPriceObject } from "./assets"; /*prettier-ignore */
import Navbar from "./components/Navbar";
import THeader from "./components/THeader";
import TBody from "./components/TBody";
import TFooter from "./components/TFooter";

let flag = false;
function App() {
    const [prices, setPrices] = useState([]);
    const [selectedHeader, setSelectedHeader] = useState(" ");
    const [profit, setProfit] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [currency, setCurrency] = useState(" ¥");
    const toast = useToast();

    const addSkins = async (skin, i) => {
        try {
            const response = await fetch(import.meta.env.VITE_SERVER_URL + skin); /*prettier-ignore */
            const data = await response.json();
            let buffPrice = data.data.items[0].price;
            setPrices((prices) => [
                ...prices,
                {
                    index: prices.length + 1,
                    name: data.data.goods_infos[skin].market_hash_name,
                    skin: skin,
                    icon: data.data.goods_infos[skin].icon_url,
                    buffPrice: parseFloat(buffPrice),
                    steamPrice: parseFloat(data.data.goods_infos[skin].steam_price_cny) /*prettier-ignore */,
                    buyPrice: skinData[i].buyPrice,
                    quantity: skinData[i].quantity,
                    profit: parseFloat((buffPrice * skinData[i].quantity - skinData[i].buyPrice * skinData[i].quantity).toFixed(2)) /*prettier-ignore */,
                    roi: (((buffPrice - skinData[i].buyPrice) / skinData[i].buyPrice) * 100).toFixed(2) /*prettier-ignore */,
                },
            ]);
            handleSetProfit(buffPrice * skinData[i].quantity - skinData[i].buyPrice * skinData[i].quantity); /*prettier-ignore */
            handleSetTotalValue(buffPrice * skinData[i].quantity);
        } catch (err) {
            addSkins(skin, i);
        }
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
        if (name === "icon" || name === "") return;
        const arr = [...prices];

        arr.sort((a, b) =>
            name === "name"
                ? a[name].localeCompare(b[name])
                : parseFloat(a[name]) - parseFloat(b[name])
        );

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
                        <THeader
                            headers={headers}
                            selectedHeader={selectedHeader}
                            handleSort={handleSort}
                        />
                        <TBody currency={currency} prices={prices} />
                    </Table>
                    <TFooter
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
