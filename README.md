## TaoBao TOP API Node.js SDK



```sh
$ npm install top-api-sdk --save
```

```js
const client = new RestClient({
  appKey: process.env.TOP_APP_KEY || '',
  secretKey: process.env.TOP_SECRET_KEY || '',
  api: '',
});

const response = await client.invoke('method', params);
```

