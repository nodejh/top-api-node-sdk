import crypto from 'crypto';

const md5 = (str: string): string => {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex')
    .toUpperCase();
};

export { md5 };
