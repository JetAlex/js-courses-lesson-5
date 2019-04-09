/*
#### Задача 3

Улучшите свою имплементацию функции `mix`.
Если на каком то из уровней callback сгенерировал ошибку → отловите ее, а затем перейдите на следующий callback.
Функция `mix` всегда должна возвращать объект в котором будет 2 поля `errors` и `value`.
Обратите внимание что `value` содержит результат вызовов всех функций, а `errors` содержит массив с информацией про все ошибки а также индекс callback где он сгенерировался.

Пример вызова:

```javascript
mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
	throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});
// Функция вернет
{
    errors: [{
            name: 'RangeError',
            message: 'Range is wrong',
            stack: 'Стек вызовов'
    }],
    value: 3
}
```
*/

const mix = (...args) => args.reduce((acc, currentCb, i) => {
  if (typeof currentCb !== 'function') throw new Error(`Argument ${i} is not a function`);
  let value;

  try {
    value = currentCb(acc.value);
  } catch(e) {
    acc.errors.push({
      name: e.name,
      message: e.message,
      stack: i,
    })
  }
  if (!!value) acc.value = value;
  return acc;
}, {errors: [], value: null});

const a = mix(() => {
  return 0;
}, (prev) => {
  return prev + 1;
}, (prev) => {
  throw new RangeError('Range is wrong');
}, (prev) => {
  return prev * 3;
});

console.log(a)
