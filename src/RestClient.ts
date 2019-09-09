import { request } from 'urllib';
import {formatDate} from './utils';
import sign from './sign';

interface ConstructorOptions {
  appKey: string; // Top 应用的 App Key
  secretKey: string; // Top 应用的 Secret Key,
  api: string; // API 接口地址
}

interface ClientOptions {
  appKey: string;
  secretKey: string;
  api: string;
}

interface MapData {
  // eslint-disable-next-line
  [key: string]: any;
}

class Client {
  public options: ClientOptions;

  constructor(options: ConstructorOptions) {
    this.options = options;
  }

  private getDefaultParams(method: string): MapData {
    const options = {
      method,
      // eslint-disable-next-line
      app_key: this.options.appKey,
      timestamp: formatDate(new Date()),
      format: 'json',
      v: '2.0',
      // eslint-disable-next-line
      sign_method: 'md5',
    };
    return options;
  }

  async invoke(method: string, params?: MapData): Promise<MapData> {
    const data = Object.assign({}, this.getDefaultParams(method), params);

    for (const key in data) {
      if (typeof data[key] === 'object') {
        data[key] = JSON.stringify(data[key]);
      }
    }

    const signature = sign(data, this.options.secretKey);

    const query = [];
    for (const key in data) {
      query.push(`${key}=${encodeURIComponent(data[key])}`);
    }
    const url = `${this.options.api}?sign=${signature}&${query.join('&')}`;
    const response = await request(url, {
      method: 'POST',
      data,
      dataType: 'json',
    });
    return response.data;
  }
}

export default Client;
