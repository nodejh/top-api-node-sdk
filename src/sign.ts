import { md5 } from './crypto';

interface Params {
  [key: string]: string;
}

const sign = (params: Params, secretKey: string): string => {
  const list: string[] = [];

  for (const key in params) {
    list.push(`${key}${params[key]}`);
  }
  const str: string = list.sort().join('');
  const signature: string = md5(`${secretKey}${str}${secretKey}`);
  return signature;
};

export default sign;
