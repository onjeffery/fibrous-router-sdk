export interface Token {
    name: string;
    symbol: string;
    decimals: number;
    address: string;
    isBase: boolean;
    isNative: boolean;
    price: number;
}
