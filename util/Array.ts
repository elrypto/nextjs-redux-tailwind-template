
export const uniqueObjArray = (current: Array<any>, uniqueProp: any): Array<any> =>
  current.filter((obj, pos, arr) =>
    arr.map(mapObj => mapObj[uniqueProp]).indexOf(obj[uniqueProp]) === pos
  )

export const uniquePrimitiveArray = (current: Array<any>) => Array.from(new Set(current))
