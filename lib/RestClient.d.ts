interface Options {
    appKey: string;
    secretKey: string;
    api: string;
}
interface MapData {
    [key: string]: any;
}
declare class Client {
    options: Options;
    constructor(options: Options);
    private getDefaultParams;
    invoke(method: string, params?: MapData): Promise<MapData>;
}
export default Client;
