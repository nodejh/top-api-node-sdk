export const pad = (n: number): string => { 
  return (n < 10 ? '0' : '') + n;
}


export const formatDate = (date: Date): string => {
  const year = pad(date.getFullYear());
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
