import { HeadersType  ,CurrencyPriceObjectType ,skinDataType, CurrencyArrayType2 } from "../types/assets"; //prettier-ignore
const getCurrencyPrice = async (currency: string) => {
    // let res = await fetch(
    //     "http://api.nbp.pl/api/exchangerates/rates/a/cny?format=json"
    // );
    // let cnyCur: number = await res.json().then((data) => data.rates[0].mid);

    // if (currency === " $") {
    //     let usdRes = await fetch(
    //         "http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json"
    //     );
    //     let usdCur = await usdRes.json().then((usdCur) => usdCur.rates[0].mid);
    //     return cnyCur / usdCur;
    // }

    // if (currency === " PLN") {
    //     return cnyCur;
    // }
    if (currency === " $") {
        return 0.14;
    }
    if (currency === " PLN") {
        return 0.67;
    }
};
export const headers: HeadersType = ["", "icon", "name", "buyPrice", "buffPrice", "steamPrice", "quantity", "profit", "roi"]; /*prettier-ignore */
export const currencyArray: CurrencyArrayType2 = [" ¥", " $", " PLN"];
export const currencyPriceObject: CurrencyPriceObjectType = {
    " ¥": 1,
    " $": (await getCurrencyPrice(" $")) ?? 0.14,
    " PLN": (await getCurrencyPrice(" PLN")) ?? 0.57,
};

export const skinData: skinDataType = [
    { id: 921379, buyPrice: 2.8, quantity: 2 },
    { id: 886606, buyPrice: 2.93, quantity: 4 },
    { id: 38148, buyPrice: 7.85, quantity: 3 },
    { id: 45237, buyPrice: 3.19, quantity: 4 },
    { id: 779175, buyPrice: 3.65, quantity: 1 },
    { id: 769121, buyPrice: 3.43, quantity: 2 },
    { id: 763236, buyPrice: 3.76, quantity: 2 },
    { id: 759175, buyPrice: 4.27, quantity: 2 },
    { id: 773524, buyPrice: 3.46, quantity: 2 },
    { id: 894086, buyPrice: 5.71, quantity: 9 },
    { id: 894095, buyPrice: 3.61, quantity: 10 },
    { id: 894283, buyPrice: 3.41, quantity: 8 },
    { id: 894183, buyPrice: 3.38, quantity: 10 },
    { id: 911078, buyPrice: 1.94, quantity: 1 },
    { id: 927991, buyPrice: 1.53, quantity: 6 },
    { id: 927964, buyPrice: 1.46, quantity: 30 },
    { id: 927994, buyPrice: 1.74, quantity: 31 },
    { id: 857515, buyPrice: 0, quantity: 1 },
    { id: 928203, buyPrice: 8.13, quantity: 2 },
    { id: 928174, buyPrice: 9.07, quantity: 2 },
    { id: 928036, buyPrice: 2.59, quantity: 2 },
    { id: 928328, buyPrice: 3.23, quantity: 2 },
    { id: 928048, buyPrice: 49.72, quantity: 2 },
    { id: 928110, buyPrice: 47.49, quantity: 2 },
    { id: 928144, buyPrice: 18, quantity: 2 },
    { id: 928175, buyPrice: 8.65, quantity: 2 },
    { id: 928086, buyPrice: 3.4, quantity: 2 },
    { id: 928043, buyPrice: 8.19, quantity: 2 },
    { id: 928038, buyPrice: 9.67, quantity: 2 },
    { id: 928188, buyPrice: 13.5, quantity: 2 },
    { id: 928080, buyPrice: 5.52, quantity: 2 },
    { id: 928199, buyPrice: 11.85, quantity: 2 },
    { id: 928035, buyPrice: 18.08, quantity: 2 },
    { id: 928030, buyPrice: 16, quantity: 2 },
    { id: 928019, buyPrice: 19.47, quantity: 3 },
    { id: 928047, buyPrice: 12.8, quantity: 2 },
    { id: 928209, buyPrice: 17.9, quantity: 2 },
    { id: 39959, buyPrice: 227.44, quantity: 1 },
    { id: 33820, buyPrice: 4.66, quantity: 1 },
    { id: 894130, buyPrice: 0.12, quantity: 1 }, //skup od oliwiera
    { id: 875845, buyPrice: 0.0825, quantity: 1 },
    { id: 894159, buyPrice: 0.0075, quantity: 1 },
    { id: 847264, buyPrice: 0.01, quantity: 1 },
    { id: 878836, buyPrice: 0.0075, quantity: 1 },
    { id: 871116, buyPrice: 0.325, quantity: 1 },
    { id: 875964, buyPrice: 0.0175, quantity: 1 },
    { id: 847198, buyPrice: 0.0125, quantity: 1 },
    { id: 875862, buyPrice: 0.375, quantity: 1 },
    { id: 871294, buyPrice: 1.24, quantity: 1 },
    { id: 894143, buyPrice: 0.0075, quantity: 1 },
    { id: 847217, buyPrice: 0.0125, quantity: 1 },
    { id: 876039, buyPrice: 0.1025, quantity: 1 },
    { id: 847219, buyPrice: 0.0075, quantity: 1 },
    { id: 894284, buyPrice: 0.0075, quantity: 1 },
    { id: 894282, buyPrice: 0.025, quantity: 1 },
    { id: 894161, buyPrice: 1.8, quantity: 1 },
    { id: 847196, buyPrice: 0.03, quantity: 1 },
    { id: 895403, buyPrice: 0.0575, quantity: 1 },
    { id: 895366, buyPrice: 0.0125, quantity: 1 },
    { id: 895275, buyPrice: 0.0075, quantity: 1 },
    { id: 875853, buyPrice: 0.3775, quantity: 1 },
    { id: 894154, buyPrice: 0.0075, quantity: 1 },
    { id: 835486, buyPrice: 0.655, quantity: 1 },
    { id: 894438, buyPrice: 0.17, quantity: 1 },
    { id: 895348, buyPrice: 0.08, quantity: 1 },
    { id: 871514, buyPrice: 1.28, quantity: 1 },
    { id: 871110, buyPrice: 0.245, quantity: 1 },
    { id: 774734, buyPrice: 0.185, quantity: 1 },
    { id: 895386, buyPrice: 0.37, quantity: 1 },
    { id: 895323, buyPrice: 0.0425, quantity: 1 },
    { id: 894366, buyPrice: 0.29, quantity: 1 },
    { id: 894427, buyPrice: 0.01, quantity: 1 },
    { id: 871132, buyPrice: 0.5225, quantity: 1 },
    { id: 894411, buyPrice: 0.0625, quantity: 1 },
    { id: 895315, buyPrice: 0.0725, quantity: 1 },
    { id: 895490, buyPrice: 0.1625, quantity: 1 },
    { id: 895389, buyPrice: 0.0475, quantity: 1 },
    { id: 894372, buyPrice: 0.1075, quantity: 1 },
    { id: 894145, buyPrice: 0.2525, quantity: 1 },
    { id: 894385, buyPrice: 0.005, quantity: 1 },
    { id: 895290, buyPrice: 0.0075, quantity: 1 },
    { id: 894315, buyPrice: 0.0075, quantity: 1 },
    { id: 894104, buyPrice: 0.14, quantity: 1 },
    { id: 875835, buyPrice: 0.0175, quantity: 1 },
    { id: 894269, buyPrice: 0.0075, quantity: 1 },
    { id: 895294, buyPrice: 0.045, quantity: 1 },
    { id: 895349, buyPrice: 0.06, quantity: 1 },
    { id: 894451, buyPrice: 0.0175, quantity: 1 },
    { id: 895341, buyPrice: 0.0375, quantity: 1 },
    { id: 894393, buyPrice: 0.0075, quantity: 1 },
    { id: 894274, buyPrice: 0.0125, quantity: 1 },
    { id: 894158, buyPrice: 0.0075, quantity: 1 },
    { id: 895423, buyPrice: 0.0975, quantity: 1 },
    { id: 894288, buyPrice: 0.0075, quantity: 1 },
    { id: 847220, buyPrice: 0.0175, quantity: 1 },
    { id: 895356, buyPrice: 0.1225, quantity: 1 },
    { id: 895397, buyPrice: 0.165, quantity: 1 },
    { id: 894440, buyPrice: 0.16, quantity: 1 },
    { id: 895506, buyPrice: 0.03, quantity: 1 },
    { id: 895331, buyPrice: 0.0225, quantity: 1 },
    { id: 894113, buyPrice: 0.17, quantity: 1 },
    { id: 894417, buyPrice: 0.0225, quantity: 1 },
    { id: 895371, buyPrice: 0.0325, quantity: 1 },
    { id: 894304, buyPrice: 0.005, quantity: 1 },
    { id: 903816, buyPrice: 0.0225, quantity: 1 },
    { id: 847216, buyPrice: 0.04, quantity: 1 },
    { id: 894395, buyPrice: 1.4975, quantity: 1 },
    { id: 894319, buyPrice: 0.0075, quantity: 1 },
    { id: 894300, buyPrice: 0.0075, quantity: 1 },
    { id: 895346, buyPrice: 0.0075, quantity: 1 },
    { id: 894312, buyPrice: 0.01, quantity: 1 },
    { id: 911211, buyPrice: 0.01, quantity: 1 },
    { id: 894405, buyPrice: 0.035, quantity: 1 },
    { id: 928033, buyPrice: 0.005, quantity: 1 },
    { id: 911265, buyPrice: 0.075, quantity: 1 },
    { id: 914071, buyPrice: 0.01, quantity: 1 },
    { id: 847221, buyPrice: 0.0125, quantity: 1 },
    { id: 911288, buyPrice: 0.1175, quantity: 1 },
    { id: 911257, buyPrice: 0.0775, quantity: 1 },
    { id: 911485, buyPrice: 0.0125, quantity: 1 },
    { id: 911117, buyPrice: 0.05, quantity: 1 },
    { id: 894289, buyPrice: 0.01, quantity: 2 },
    { id: 911574, buyPrice: 0.1375, quantity: 1 },
    { id: 894401, buyPrice: 0.1425, quantity: 2 },
    { id: 911358, buyPrice: 0.0975, quantity: 1 },
    { id: 911147, buyPrice: 0.0525, quantity: 1 },
    { id: 928058, buyPrice: 0.005, quantity: 1 },
    { id: 911646, buyPrice: 0.68, quantity: 1 },
    { id: 894308, buyPrice: 0.01, quantity: 2 },
    { id: 928031, buyPrice: 0.015, quantity: 1 },
    { id: 928148, buyPrice: 0.015, quantity: 1 },
    { id: 894379, buyPrice: 0.01, quantity: 2 },
    { id: 894263, buyPrice: 0.2325, quantity: 2 },
    { id: 928240, buyPrice: 0.005, quantity: 1 },
    { id: 896645, buyPrice: 0.0125, quantity: 7 },
    { id: 847203, buyPrice: 0.01, quantity: 2 },
    { id: 911201, buyPrice: 0.065, quantity: 1 },
    { id: 911382, buyPrice: 0.0725, quantity: 1 },
    { id: 910998, buyPrice: 0.01, quantity: 1 },
    { id: 835484, buyPrice: 0.1175, quantity: 2 },
    { id: 928265, buyPrice: 0.005, quantity: 1 },
    { id: 894374, buyPrice: 0.0125, quantity: 2 },
    { id: 928257, buyPrice: 0.005, quantity: 1 },
    { id: 911664, buyPrice: 0.09, quantity: 1 },
    { id: 911275, buyPrice: 0.0225, quantity: 2 },
    { id: 928487, buyPrice: 0.015, quantity: 1 },
    { id: 928696, buyPrice: 0.0425, quantity: 1 },
    { id: 895393, buyPrice: 0.1125, quantity: 1 },
    { id: 928192, buyPrice: 0.005, quantity: 2 },
    { id: 928023, buyPrice: 0.005, quantity: 2 },
    { id: 847276, buyPrice: 0.0175, quantity: 2 },
    { id: 911459, buyPrice: 0.035, quantity: 1 },
    { id: 894422, buyPrice: 0.0075, quantity: 1 },
    { id: 928264, buyPrice: 0.005, quantity: 2 },
    { id: 928278, buyPrice: 0.005, quantity: 5 },
    { id: 894429, buyPrice: 0.0075, quantity: 2 },
    { id: 911376, buyPrice: 0.0275, quantity: 1 },
    { id: 928155, buyPrice: 0.005, quantity: 2 },
    { id: 894384, buyPrice: 0.0625, quantity: 2 },
    { id: 928322, buyPrice: 0.025, quantity: 1 },
    { id: 911264, buyPrice: 0.035, quantity: 1 },
    { id: 894443, buyPrice: 0.09, quantity: 2 },
    { id: 894344, buyPrice: 0.0075, quantity: 2 },
    { id: 894404, buyPrice: 0.0075, quantity: 2 },
    { id: 928277, buyPrice: 0.005, quantity: 5 },
    { id: 914082, buyPrice: 0.1025, quantity: 1 },
    { id: 894462, buyPrice: 0.0075, quantity: 2 },
    { id: 928467, buyPrice: 0.0275, quantity: 3 },
    { id: 894424, buyPrice: 0.0075, quantity: 5 },
    { id: 847230, buyPrice: 0.01, quantity: 2 },
    { id: 928258, buyPrice: 0.005, quantity: 2 },
    { id: 928227, buyPrice: 0.005, quantity: 3 },
    { id: 928296, buyPrice: 0.005, quantity: 5 },
    { id: 928311, buyPrice: 0.005, quantity: 5 },
    { id: 894415, buyPrice: 0.01, quantity: 3 },
    { id: 911007, buyPrice: 0.0475, quantity: 1 },
    { id: 928164, buyPrice: 0.005, quantity: 3 },
    { id: 911259, buyPrice: 0.1, quantity: 1 },
    { id: 928228, buyPrice: 0.005, quantity: 6 },
    { id: 911607, buyPrice: 0.0625, quantity: 1 },
    { id: 895281, buyPrice: 0.0075, quantity: 3 },
    { id: 894432, buyPrice: 0.0075, quantity: 4 },
    { id: 928183, buyPrice: 0.0225, quantity: 1 },
    { id: 911385, buyPrice: 0.01, quantity: 1 },
    { id: 928068, buyPrice: 0.005, quantity: 1 },
    { id: 911151, buyPrice: 0.075, quantity: 2 },
    { id: 911249, buyPrice: 0.01, quantity: 1 },
    { id: 894311, buyPrice: 0.01, quantity: 2 },
    { id: 928118, buyPrice: 0.005, quantity: 2 },
    { id: 928186, buyPrice: 0.125, quantity: 1 },
    { id: 895422, buyPrice: 0.1375, quantity: 1 },
    { id: 911152, buyPrice: 0.1325, quantity: 1 },
    { id: 928195, buyPrice: 0.005, quantity: 1 },
    { id: 911279, buyPrice: 0.015, quantity: 2 },
    { id: 928089, buyPrice: 0.005, quantity: 1 },
    { id: 928336, buyPrice: 0.005, quantity: 1 },
    { id: 911333, buyPrice: 0.01, quantity: 1 },
    { id: 928161, buyPrice: 0.005, quantity: 1 },
    { id: 911476, buyPrice: 0.015, quantity: 1 },
    { id: 928168, buyPrice: 0.005, quantity: 1 },
    { id: 894349, buyPrice: 0.0075, quantity: 2 },
    { id: 911128, buyPrice: 0.025, quantity: 1 },
    { id: 928214, buyPrice: 0.005, quantity: 1 },
    { id: 911497, buyPrice: 0.115, quantity: 1 },
    { id: 911373, buyPrice: 0.0325, quantity: 1 },
    { id: 911119, buyPrice: 0.03, quantity: 1 },
    { id: 894270, buyPrice: 0.0075, quantity: 2 },
    { id: 928140, buyPrice: 0.04, quantity: 1 },
    { id: 911267, buyPrice: 0.01, quantity: 1 },
    { id: 928376, buyPrice: 0.005, quantity: 1 },
    { id: 928379, buyPrice: 0.01, quantity: 1 },
    { id: 911460, buyPrice: 0.01, quantity: 1 },
    { id: 894142, buyPrice: 0.0075, quantity: 2 },
    { id: 894380, buyPrice: 0.075, quantity: 2 },
    { id: 911449, buyPrice: 0.03, quantity: 1 },
    { id: 911280, buyPrice: 0.01, quantity: 2 },
    { id: 894381, buyPrice: 0.025, quantity: 2 },
    { id: 928021, buyPrice: 0.005, quantity: 1 },
    { id: 911490, buyPrice: 0.01, quantity: 2 },
    { id: 911091, buyPrice: 0.0175, quantity: 2 },
    { id: 895424, buyPrice: 0.025, quantity: 2 },
    { id: 895309, buyPrice: 0.04, quantity: 2 },
    { id: 896649, buyPrice: 0.16, quantity: 2 },
    { id: 928189, buyPrice: 0.005, quantity: 1 },
    { id: 896644, buyPrice: 0.0575, quantity: 3 },
    { id: 928123, buyPrice: 0.005, quantity: 3 },
    { id: 910997, buyPrice: 0.01, quantity: 2 },
    { id: 894348, buyPrice: 0.0875, quantity: 2 },
    { id: 894173, buyPrice: 0.01, quantity: 2 },
    { id: 911399, buyPrice: 0.11, quantity: 2 },
    { id: 928262, buyPrice: 0.01, quantity: 2 },
    { id: 894302, buyPrice: 0.005, quantity: 4 },
    { id: 911361, buyPrice: 0.03, quantity: 2 },
    { id: 894121, buyPrice: 0.005, quantity: 4 },
    { id: 894464, buyPrice: 0.0075, quantity: 2 },
    { id: 894267, buyPrice: 0.0075, quantity: 3 },
    { id: 928275, buyPrice: 0.015, quantity: 2 },
    { id: 895317, buyPrice: 0.0375, quantity: 5 },
    { id: 894370, buyPrice: 0.01, quantity: 3 },
    { id: 894168, buyPrice: 0.065, quantity: 7 },
    { id: 928349, buyPrice: 0.005, quantity: 3 },
    { id: 928308, buyPrice: 0.005, quantity: 5 },
    { id: 895276, buyPrice: 0.005, quantity: 5 },
    { id: 928247, buyPrice: 0.005, quantity: 1 },
    { id: 928115, buyPrice: 0.025, quantity: 1 },
    { id: 911200, buyPrice: 0.0125, quantity: 3 },
    { id: 928081, buyPrice: 0.015, quantity: 2 },
    { id: 895259, buyPrice: 0.095, quantity: 1 },
    { id: 928093, buyPrice: 0.005, quantity: 1 },
    { id: 894400, buyPrice: 0.01, quantity: 2 },
    { id: 911322, buyPrice: 0.0375, quantity: 2 },
    { id: 928154, buyPrice: 0.0075, quantity: 6 },
    { id: 928684, buyPrice: 0.005, quantity: 5 },
    { id: 911402, buyPrice: 0.1275, quantity: 2 },
    { id: 911016, buyPrice: 0.0125, quantity: 2 },
    { id: 928018, buyPrice: 0.0075, quantity: 2 },
    { id: 894345, buyPrice: 0.0075, quantity: 3 },
    { id: 894307, buyPrice: 0.0075, quantity: 2 },
    { id: 895302, buyPrice: 0.0225, quantity: 2 },
    { id: 928371, buyPrice: 0.005, quantity: 3 },
    { id: 894163, buyPrice: 0.305, quantity: 2 },
    { id: 928039, buyPrice: 0.015, quantity: 1 },
    { id: 894321, buyPrice: 0.015, quantity: 3 },
    { id: 911187, buyPrice: 0.0225, quantity: 2 },
    { id: 928282, buyPrice: 0.005, quantity: 7 },
    { id: 928150, buyPrice: 0.005, quantity: 3 },
    { id: 895362, buyPrice: 0.0125, quantity: 5 },
    { id: 896634, buyPrice: 0.0125, quantity: 4 },
    { id: 894452, buyPrice: 0.005, quantity: 2 },
    { id: 895284, buyPrice: 0.0175, quantity: 3 },
    { id: 928172, buyPrice: 0.005, quantity: 2 },
    { id: 911133, buyPrice: 0.015, quantity: 2 },
    { id: 928159, buyPrice: 0.005, quantity: 3 },
    { id: 928147, buyPrice: 0.005, quantity: 3 },
    { id: 928234, buyPrice: 0.005, quantity: 6 },
    { id: 894115, buyPrice: 0.01, quantity: 3 },
    { id: 894108, buyPrice: 0.0225, quantity: 25 },
    { id: 894328, buyPrice: 0.01, quantity: 4 },
    { id: 911325, buyPrice: 0.0275, quantity: 3 },
    { id: 894134, buyPrice: 0.045, quantity: 8 },
    { id: 894301, buyPrice: 0.085, quantity: 4 },
    { id: 927968, buyPrice: 0.005, quantity: 13 },
    { id: 928532, buyPrice: 0.0175, quantity: 2 },
    { id: 894151, buyPrice: 0.0075, quantity: 8 },
    { id: 927972, buyPrice: 0.005, quantity: 14 },
    { id: 894078, buyPrice: 0.01, quantity: 2 },
    { id: 911396, buyPrice: 0.0675, quantity: 4 },
    { id: 911196, buyPrice: 0.0375, quantity: 2 },
    { id: 894109, buyPrice: 0.04, quantity: 7 },
    { id: 894179, buyPrice: 0.045, quantity: 108 },
    { id: 894376, buyPrice: 0.01, quantity: 11 },
    { id: 894286, buyPrice: 0.3, quantity: 20 },
    { id: 928471, buyPrice: 0.0125, quantity: 2 },
    { id: 894375, buyPrice: 0.0075, quantity: 4 },
    { id: 875860, buyPrice: 0.0225, quantity: 13 },
    { id: 895273, buyPrice: 0.02, quantity: 3 },
    { id: 895293, buyPrice: 0.0075, quantity: 3 },
    { id: 895321, buyPrice: 0.615, quantity: 3 },
    { id: 894146, buyPrice: 0.02, quantity: 7 },
    { id: 894177, buyPrice: 0.01, quantity: 20 },
    { id: 928231, buyPrice: 0.005, quantity: 5 },
    { id: 928102, buyPrice: 0.005, quantity: 3 },
    { id: 895584, buyPrice: 0.0775, quantity: 2 },
    { id: 894371, buyPrice: 0.015, quantity: 4 },
    { id: 928683, buyPrice: 0.005, quantity: 2 },
    { id: 894082, buyPrice: 0.0275, quantity: 11 },
    { id: 928279, buyPrice: 0.005, quantity: 4 },
    { id: 894299, buyPrice: 0.065, quantity: 9 },
    { id: 894262, buyPrice: 0.0075, quantity: 4 },
    { id: 928281, buyPrice: 0.005, quantity: 4 },
    { id: 895288, buyPrice: 0.01, quantity: 6 },
    { id: 928500, buyPrice: 0.0125, quantity: 2 },
    { id: 894399, buyPrice: 0.01, quantity: 6 },
    { id: 928171, buyPrice: 0.005, quantity: 4 },
    { id: 894081, buyPrice: 0.01, quantity: 29 },
    { id: 927974, buyPrice: 0.0075, quantity: 9 },
    { id: 894362, buyPrice: 0.0075, quantity: 3 },
    { id: 894101, buyPrice: 0.0075, quantity: 10 },
    { id: 894110, buyPrice: 0.0125, quantity: 14 },
    { id: 894085, buyPrice: 0.035, quantity: 9 },
    { id: 928251, buyPrice: 0.005, quantity: 2 },
    { id: 894127, buyPrice: 0.01, quantity: 7 },
    { id: 928443, buyPrice: 0.005, quantity: 3 },
    { id: 928280, buyPrice: 0.0575, quantity: 2 },
    { id: 928360, buyPrice: 0.005, quantity: 6 },
    { id: 894446, buyPrice: 0.01, quantity: 2 },
    { id: 894128, buyPrice: 0.26, quantity: 102 },
    { id: 894135, buyPrice: 0.23, quantity: 24 },
    { id: 928342, buyPrice: 0.005, quantity: 7 },
    { id: 894320, buyPrice: 0.195, quantity: 5 },
    { id: 896639, buyPrice: 0.01, quantity: 8 },
    { id: 927976, buyPrice: 0.005, quantity: 10 },
    { id: 894275, buyPrice: 0.0075, quantity: 3 },
    { id: 894409, buyPrice: 0.205, quantity: 4 },
    { id: 894099, buyPrice: 0.0875, quantity: 14 },
    { id: 894079, buyPrice: 0.2575, quantity: 36 },
    { id: 774689, buyPrice: 0.1175, quantity: 1 },
    { id: 894266, buyPrice: 0.0075, quantity: 1 },
    { id: 894278, buyPrice: 0.03, quantity: 1 },
    { id: 928202, buyPrice: 0.005, quantity: 3 },
    { id: 928166, buyPrice: 0.005, quantity: 5 },
    { id: 894102, buyPrice: 0.025, quantity: 5 },
    { id: 928077, buyPrice: 0.005, quantity: 1 },
    { id: 928061, buyPrice: 0.125, quantity: 1 },
    { id: 894343, buyPrice: 0.03, quantity: 4 },
    { id: 895469, buyPrice: 0.32, quantity: 1 },
    { id: 894369, buyPrice: 0.0075, quantity: 1 },
    { id: 894373, buyPrice: 0.01, quantity: 4 },
    { id: 928162, buyPrice: 0.005, quantity: 5 },
    { id: 911008, buyPrice: 0.01, quantity: 2 },
    { id: 875857, buyPrice: 0.2825, quantity: 5 },
    { id: 928088, buyPrice: 0.005, quantity: 5 },
    { id: 894175, buyPrice: 0.01, quantity: 8 },
    { id: 774673, buyPrice: 0.28, quantity: 1 },
    { id: 896642, buyPrice: 0.0075, quantity: 5 },
    { id: 896638, buyPrice: 0.045, quantity: 1 },
    { id: 911261, buyPrice: 0.0375, quantity: 1 },
    { id: 894174, buyPrice: 0.01, quantity: 3 },
    { id: 911297, buyPrice: 0.02, quantity: 2 },
    { id: 894287, buyPrice: 0.1725, quantity: 1 },
    { id: 928316, buyPrice: 0.005, quantity: 7 },
    { id: 894105, buyPrice: 0.0075, quantity: 7 },
    { id: 928276, buyPrice: 0.005, quantity: 3 },
    { id: 894468, buyPrice: 0.0075, quantity: 1 },
    { id: 911328, buyPrice: 0.01, quantity: 1 },
    { id: 894273, buyPrice: 0.0075, quantity: 1 },
    { id: 911491, buyPrice: 0.14, quantity: 1 },
    { id: 895378, buyPrice: 0.0575, quantity: 1 },
    { id: 894397, buyPrice: 0.2225, quantity: 1 },
    { id: 911105, buyPrice: 0.0075, quantity: 1 },
    { id: 895387, buyPrice: 0.0075, quantity: 2 },
    { id: 894326, buyPrice: 0.005, quantity: 1 },
    { id: 928116, buyPrice: 0.005, quantity: 1 },
    { id: 914073, buyPrice: 0.01, quantity: 1 },
    { id: 927966, buyPrice: 0.005, quantity: 8 },
    { id: 910986, buyPrice: 0.0075, quantity: 1 },
    { id: 895345, buyPrice: 0.0075, quantity: 3 },
    { id: 895357, buyPrice: 0.07, quantity: 1 },
    { id: 878839, buyPrice: 0.0075, quantity: 1 },
    { id: 928235, buyPrice: 0.005, quantity: 5 },
    { id: 927965, buyPrice: 0.01, quantity: 10 },
    { id: 927986, buyPrice: 0.005, quantity: 2 },
    { id: 928201, buyPrice: 0.005, quantity: 2 },
    { id: 896637, buyPrice: 0.065, quantity: 1 },
    { id: 928395, buyPrice: 0.005, quantity: 5 },
    { id: 928160, buyPrice: 0.005, quantity: 5 },
    { id: 911101, buyPrice: 0.0175, quantity: 1 },
    { id: 911351, buyPrice: 0.34, quantity: 1 },
    { id: 928178, buyPrice: 0.005, quantity: 1 },
    { id: 895507, buyPrice: 0.0275, quantity: 1 },
    { id: 894303, buyPrice: 0.0175, quantity: 1 },
    { id: 895316, buyPrice: 0.0075, quantity: 2 },
    { id: 894350, buyPrice: 0.025, quantity: 2 },
    { id: 911148, buyPrice: 0.0225, quantity: 5 },
    { id: 895538, buyPrice: 0.0825, quantity: 1 },
    { id: 928237, buyPrice: 0.005, quantity: 4 },
    { id: 927973, buyPrice: 0.005, quantity: 8 },
    { id: 894341, buyPrice: 0.015, quantity: 7 },
    { id: 911125, buyPrice: 0.0075, quantity: 2 },
    { id: 875979, buyPrice: 0.04, quantity: 1 },
    { id: 894382, buyPrice: 0.02, quantity: 1 },
    { id: 894155, buyPrice: 0.0075, quantity: 1 },
    { id: 894352, buyPrice: 0.0075, quantity: 1 },
    { id: 895336, buyPrice: 0.0775, quantity: 1 },
    { id: 895390, buyPrice: 0.1225, quantity: 1 },
    { id: 888028, buyPrice: 0.9175, quantity: 1 },
    { id: 894309, buyPrice: 0.005, quantity: 1 },
    { id: 894272, buyPrice: 0.5075, quantity: 1 },
    { id: 896640, buyPrice: 0.135, quantity: 1 },
    { id: 928004, buyPrice: 0.005, quantity: 1 },
    { id: 894281, buyPrice: 0.0175, quantity: 2 },
    { id: 928392, buyPrice: 0.05, quantity: 1 },
    { id: 928450, buyPrice: 0.01, quantity: 1 },
    { id: 911413, buyPrice: 0.02, quantity: 2 },
    { id: 928243, buyPrice: 0.005, quantity: 3 },
    { id: 911191, buyPrice: 0.02, quantity: 1 },
    { id: 894439, buyPrice: 0.0125, quantity: 2 },
    { id: 928191, buyPrice: 0.005, quantity: 1 },
    { id: 894398, buyPrice: 0.0075, quantity: 3 },
    { id: 894402, buyPrice: 0.055, quantity: 2 },
    { id: 894340, buyPrice: 0.02, quantity: 7 },
    { id: 895314, buyPrice: 0.0075, quantity: 2 },
    { id: 928103, buyPrice: 0.01, quantity: 5 },
    { id: 928433, buyPrice: 0.0275, quantity: 1 },
    { id: 927971, buyPrice: 0.005, quantity: 9 },
    { id: 911324, buyPrice: 0.14, quantity: 1 },
    { id: 928341, buyPrice: 0.005, quantity: 1 },
    { id: 910993, buyPrice: 0.01, quantity: 2 },
    { id: 928127, buyPrice: 0.005, quantity: 1 },
    { id: 894444, buyPrice: 0.0075, quantity: 2 },
    { id: 911208, buyPrice: 0.0075, quantity: 1 },
    { id: 911094, buyPrice: 0.04, quantity: 2 },
    { id: 894264, buyPrice: 0.0075, quantity: 2 },
    { id: 928046, buyPrice: 0.005, quantity: 1 },
    { id: 894323, buyPrice: 0.0725, quantity: 2 },
    { id: 928233, buyPrice: 0.01, quantity: 1 },
    { id: 928062, buyPrice: 0.005, quantity: 1 },
    { id: 895318, buyPrice: 0.0975, quantity: 2 },
    { id: 928287, buyPrice: 0.005, quantity: 2 },
    { id: 895365, buyPrice: 0.0075, quantity: 5 },
    { id: 894080, buyPrice: 0.035, quantity: 12 },
    { id: 914111, buyPrice: 0.0625, quantity: 1 },
    { id: 894416, buyPrice: 0.0075, quantity: 4 },
    { id: 928333, buyPrice: 0.005, quantity: 1 },
    { id: 911104, buyPrice: 0.015, quantity: 1 },
    { id: 927982, buyPrice: 0.005, quantity: 3 },
    { id: 894389, buyPrice: 0.0075, quantity: 2 },
    { id: 911346, buyPrice: 0.1075, quantity: 1 },
    { id: 896636, buyPrice: 0.01, quantity: 6 },
    { id: 894377, buyPrice: 0.0075, quantity: 4 },
    { id: 928226, buyPrice: 0.005, quantity: 5 },
    { id: 928223, buyPrice: 0.0275, quantity: 2 },
    { id: 928248, buyPrice: 0.005, quantity: 3 },
    { id: 895420, buyPrice: 0.17, quantity: 10 },
    { id: 911367, buyPrice: 0.01, quantity: 3 },
    { id: 894107, buyPrice: 0.135, quantity: 26 },
    { id: 928020, buyPrice: 0.0125, quantity: 1 },
];
