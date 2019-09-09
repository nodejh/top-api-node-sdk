interface Params {
    [key: string]: string;
}
declare const sign: (params: Params, secretKey: string) => string;
export default sign;
