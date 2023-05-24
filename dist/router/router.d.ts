import { RouteConfig, RouteResponse, RouterError, Token, Transaction, TransactionConfig } from "../types";
export declare class Router {
    private readonly url;
    constructor(url: string);
    route(options: RouteConfig): Promise<RouteResponse | RouterError>;
    tokenList(): Promise<Token[]>;
    buildTransaction(config: TransactionConfig): Transaction;
}
