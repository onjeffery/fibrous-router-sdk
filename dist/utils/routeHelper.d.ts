import { RouteParams, RouteSuccess, Percent } from "../types";
/**
 * Adds route options to the url
 * @param url: Route URL
 * @param options: Options for the route
 * @returns Final URL
 */
export declare const buildRouteUrl: (url: string, params: RouteParams) => string;
/**
 * Builds headers for the request
 * @param apiKey Optional API key
 * @returns Headers for the request
 */
export declare const buildHeaders: (apiKey?: string) => Record<string, string>;
/** Removes % from the percent */
export declare const trimPercent: (p: Percent) => number;
/** Adds % to the percent */
export declare const parsePercent: (p: number) => string;
/**
 * Formats the response from the Fibrous API into a flattened array of swaps
 * @param res Response from the Fibrous API
 * @returns Flattened array of swaps, ready to be passed to the Starknet contract
 */
export declare function buildSwapCalldata(res: RouteSuccess, slippage: number, destination: string): string[];
//# sourceMappingURL=routeHelper.d.ts.map