import React from "react";
import { skinData } from "../assets/assets";
import { pricesType } from "../types/app";

export const addSkins = async (skin: number, i: number, setPrices: React.Dispatch<React.SetStateAction<pricesType>>, setProfit: React.Dispatch<React.SetStateAction<number>>, setTotalValue: React.Dispatch<React.SetStateAction<number>>) => {
    try {
        const response = await fetch(`https://steam-investments-server.vercel.app/${skin}`); /*prettier-ignore */
        const data = await response.json();
        let buffPrice = data.data.items[0].price;
        let profit = buffPrice * skinData[i].quantity - skinData[i].buyPrice * skinData[i].quantity; /*prettier-ignore */
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
                profit: parseFloat(profit.toFixed(2)) /*prettier-ignore */,
                roi: parseFloat((((buffPrice - skinData[i].buyPrice) / skinData[i].buyPrice) * 100).toFixed(2)) /*prettier-ignore */,
            },
        ]);
        setProfit((pro) => profit + pro); /*prettier-ignore */
        setTotalValue((totalValue) => totalValue + buffPrice * skinData[i].quantity);
    } catch (err) {
        addSkins(skin, i, setPrices, setProfit, setTotalValue);
    }
};