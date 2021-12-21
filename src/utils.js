export const arraymove = (arr, fromIndex, toIndex) => {
  const copyArr = [...arr];
  var element = copyArr[fromIndex];
  copyArr.splice(fromIndex, 1);
  copyArr.splice(toIndex, 0, element);

  return copyArr;
};

export const removeOranges = (arr, amount) => {
  const newCopy = [...arr];
  const lastElement = newCopy.pop();

  if (lastElement.length > amount) {
    const lessItems = lastElement.slice(0, lastElement.length - amount);
    return [...newCopy, lessItems];
  }

  if (lastElement.length === amount) {
    return [...newCopy];
  }

  return removeOranges(newCopy, amount - lastElement.length);
};

export const delay = (arr) => () =>
  new Promise((resolve) => setTimeout(() => resolve(arr), 1000));

export const moveOranges = (arr) => {
  let copyArr = [...arr];
  const moved = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    if (index - 1 < 0) {
      break;
    }
    copyArr = arraymove(copyArr, index, index - 1);
    moved.push(delay(copyArr));
  }

  return moved;
};
