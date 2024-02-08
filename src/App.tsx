import { useState, useEffect } from "react";
import { useToast, Table, TableContainer } from "@chakra-ui/react"; /*prettier-ignore */
import { skinData, headers, currencyArray, currencyPriceObject } from "./assets/assets"; /*prettier-ignore */
import Navbar from "./components/Navbar";
import THeader from "./components/THeader";
import TBody from "./components/TBody";
import TFooter from "./components/TFooter";
import { pricesType } from "./types/app";
import { CurrencyArrayType } from "./types/assets";
import { addSkins } from "./functions/functions";

let flag = false;
function App() {
    const [prices, setPrices] = useState<pricesType>([]);
    const [selectedHeader, setSelectedHeader] = useState<string>(" ");
    const [profit, setProfit] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [currency, setCurrency] = useState<CurrencyArrayType>(" ¥");
    const toast = useToast();

    useEffect(() => {
        if (!flag) skinData.forEach((skin, i) => addSkins(skin.id, i, setPrices, setProfit, setTotalValue));
        flag = true;
    }, []);

    useEffect(() => {
        if (skinData.length === prices.length)
            toast({
                title: "Skins were loaded",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
    }, [prices]);

    const handleSort = (name: string, prices: pricesType) => {
        if (name === "icon" || name === "") return;
        const arr = [...prices];

        arr.sort((a, b) =>
            name === "name"
                ? a[name].localeCompare(b[name])
                : parseFloat(String(a[name as keyof typeof a])) -
                  parseFloat(String(b[name as keyof typeof b]))
        );

        setSelectedHeader(name);
        if (selectedHeader === name) {
            arr.reverse();
            setSelectedHeader(name + 1);
        }
        setPrices(arr);
    };

    return (
        <>
            <Navbar
                currencyArray={currencyArray}
                currency={currency}
                setCurrency={setCurrency}
            />
            <div className="flex justify-center text-white">
                <TableContainer>
                    <TFooter
                        profit={profit}
                        currencyPriceObject={currencyPriceObject}
                        totalValue={totalValue}
                        currency={currency}
                    />
                    <Table className="max-w-lg">
                        <THeader
                            headers={headers}
                            selectedHeader={selectedHeader}
                            handleSort={handleSort}
                            prices={prices}
                        />
                        <TBody currency={currency} prices={prices} />
                    </Table>
                </TableContainer>
            </div>

            <a
                href="https://www.youtube.com/watch?v=gMuDEDIPZ3c"
                className="flex items-center justify-center text-white">
                <img
                    src="assets/bob.jpg"
                    alt="Potwierdzenie że paryż pójdzie w góre"
                />
            </a>
        </>
    );
}

export default App;
