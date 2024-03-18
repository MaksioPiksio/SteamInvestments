import { HeadersType  ,CurrencyPriceObjectType ,skinDataType, CurrencyArrayType2 } from "../types/assets"; //prettier-ignore
// const getCurrencyPrice = async (currency: string) => {
//     let res = await fetch(
//         "http://api.nbp.pl/api/exchangerates/rates/a/cny?format=json"
//     );
//     let cnyCur: number = await res.json().then((data) => data.rates[0].mid);

//     if (currency === " $") {
//         let usdRes = await fetch(
//             "http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json"
//         );
//         let usdCur = await usdRes.json().then((usdCur) => usdCur.rates[0].mid);
//         return cnyCur / usdCur;
//     }

//     if (currency === " PLN") {
//         return cnyCur;
//     }
// };
export const headers: HeadersType = ["", "icon", "name", "buyPrice", "buffPrice", "steamPrice", "quantity", "profit", "roi"]; /*prettier-ignore */
export const currencyArray: CurrencyArrayType2 = [" ¥", " $", " PLN"];
export const currencyPriceObject: CurrencyPriceObjectType = {
    " ¥": 1,
    " $": 0.14,
    " PLN": 0.55,//nah
};

export const skinData: skinDataType = [
    { id: 34141, buyPrice: 127, quantity: 1 },
    { id: 781598, buyPrice: 294, quantity: 2 },
    { id: 763250, buyPrice: 180, quantity: 1 },
    { id: 871478, buyPrice: 120, quantity: 1 },
    { id: 886981, buyPrice: 60, quantity: 1 },
    { id: 774681, buyPrice: 20, quantity: 6 },
    { id: 35879, buyPrice: 243.6, quantity: 1 },
    { id: 921379, buyPrice: 2.8, quantity: 2 },
    { id: 886606, buyPrice: 2.93, quantity: 4 },
    { id: 38148, buyPrice: 7.85, quantity: 3 },
    { id: 45237, buyPrice: 3.19, quantity: 4 },
    { id: 779175, buyPrice: 3.65, quantity: 1 },
    { id: 769121, buyPrice: 3.43, quantity: 2 },
    { id: 763236, buyPrice: 3.76, quantity: 2 },
    { id: 759175, buyPrice: 4.27, quantity: 2 },
    { id: 773524, buyPrice: 3.46, quantity: 2 },
    { id: 857515, buyPrice: 0, quantity: 1 },
    { id: 39959, buyPrice: 227.44, quantity: 1 },
    { id: 33820, buyPrice: 4.66, quantity: 1 },
];
