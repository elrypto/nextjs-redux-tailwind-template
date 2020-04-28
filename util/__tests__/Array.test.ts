import { uniquePrimitiveArray, uniqueObjArray } from '../Array';

it('uniques a primitive array', () => {
  expect(uniquePrimitiveArray(['a', 'b', 'c', 'a']).length).toEqual(3);
});


it('uniques an object array', () => {
  const testArray = [
    { id: 1, 'name': 'quill', number: 2 },
    { id: 2, 'name': 'dill', number: 3 },
    { id: 1, 'name': 'quill', number: 2 }
  ]
  expect(uniqueObjArray(testArray, 'id').length).toEqual(2);
  expect(uniqueObjArray(testArray, 'number').length).toEqual(2);
});