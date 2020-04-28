export const escapeAmpContent = (arr: Array<any>, field: string) =>
  arr.map(ele => {
    const temp = { ...ele };
    temp[field] = ele[field].replace(/&amp;/g, 'and');
    return temp;
  })


export const dottedStr = (str: string, length: number) => {
  if (str.length <= length) return str;

  return `${str.slice(0, length)}...`;
}
