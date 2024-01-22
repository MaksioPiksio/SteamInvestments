export type skinDataType = { id: number; buyPrice: number; quantity: number }[];
export type HeadersType = string[];
export type CurrencyArrayType = " ¥" | " $" | " PLN";
export type CurrencyArrayType2 = CurrencyArrayType[];
export type CurrencyPriceObjectType = {
    [key in CurrencyArrayType]: number;
};
