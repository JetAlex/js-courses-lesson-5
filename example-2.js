/*
#### Задача 2

Напишите свою имплементацию функции `mix`. Данная функция принимает неограниченное количество аргументов.
Каждый аргумент по своему типу должен быть функцией иначе генерировать ошибку.
Функция `mix` запускает свои callback функции последовательно. В качестве параметра каждый callback принимает то что возвращает предыдущий callback.
Первый сallback не принимает параметров.

Пример вызова:

```javascript
mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) // 2
```
*/

const mix = (...args) => args.reduce((acc, currentCb, i) => {
  if (typeof currentCb !== 'function') throw new Error(`Argument ${i} is not a function`);
  return currentCb(acc);
}, null);

const a = mix(() => {
  return 0;
}, (prev) => {
  return prev + 1;
}, (prev) => {
  return prev * 2;
}) // 2

console.log(a)

