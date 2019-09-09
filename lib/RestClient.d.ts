interface ConstructorOptions {
    appKey: string;
    secretKey: string;
    api: string;
}
interface ClientOptions {
    appKey: string;
    secretKey: string;
    api: string;
}
interface MapData {
    [key: string]: any;
}
declare class Client {
    options: ClientOptions;
    constructor(options: ConstructorOptions);
    private getDefaultParams;
    invoke(method: string, params?: MapData): Promise<MapData>;
}
export default Client;
