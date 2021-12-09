export function refactored(s, a, b) {
let symb_arr = s.split("");

  for (let i = symb_arr.length - 1; i > 0; i--) {
    let letter = symb_arr[i];
    if (letter === a || letter === b) return i;
  }
  return -1;
}

/**
Итерации лучше начинать с конца, так как первый элемент, который удовлетворяет условию, и будет искомым.
Рассматривать остальные элементы уже не нужно.
**/
