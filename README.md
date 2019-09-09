## TaoBao TOP API Node.js SDK


### install

```sh
$ npm install top-api-sdk --save
```

### usage

```js
import { RestClient } from 'top-api-sdk';

const client = new RestClient({
  appKey: process.env.TOP_APP_KEY || '',
  secretKey: process.env.TOP_SECRET_KEY || '',
  api: '',
});

const response = await client.invoke('method', params);
```

