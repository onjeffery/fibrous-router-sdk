import { RouteResponse, Token, Transaction, ProtocolId, RouteOverrides, RouteSuccess } from "../types";
export declare class Router {
    readonly DEFAULT_API_URL = "https://api.fibrous.finance";
    readonly ROUTER_ADDRESS = "0x1b23ed400b210766111ba5b1e63e33922c6ba0c45e6ad56ce112e5f4c578e62";
    private readonly apiUrl;
    private readonly apiKey;
    constructor(dedicatedUrl?: string, apiKey?: string);
    /**
     * Gets the best route from the API
     * @param amount: Amount to swap, formatted
     * @param tokenInAddress: Token to swap from
     * @param tokenOutAddress: Token to swap to
     * @param options: Optional parameters
     * @returns Route response
     * @throws Error if the API returns an error
     */
    getBestRoute(amount: number, tokenInAddress: string, tokenOutAddress: string, options?: Partial<RouteOverrides>): Promise<RouteResponse>;
    /**
     * @returns Supported token list
     */
    supportedTokens(): Promise<Record<string, Token>>;
    /**
     * @returns Supported protocol list
     */
    supportedProtocols(): Promise<Record<string, ProtocolId>>;
    /**
     * Builds a Starknet transaction out of the route response
     * @param route: Route response
     * @param slippage: Slippage percentage (0.01 = 1%)
     * @param receiverAddress: Address to receive the tokens
     */
    buildTransaction(route: RouteSuccess, slippage: number, receiverAddress: string): Transaction;
}
//# sourceMappingURL=router.d.ts.map