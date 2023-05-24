import { RouteConfig, RouteResponse, RouterResponse, RouterError } from "../types";
export declare function routeRequest<T>(url: string, params: RouteConfig): Promise<RouteResponse | RouterError>;
export declare function formatRouterCall(res: RouterResponse, slippage: number, destination: string): any[];
