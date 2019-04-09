/*
#### Задача 4

Написать свою имплементацию функции `compose`. Функция принимает неограниченное количество параметров.
Каждый аргумент должен быть функцией. Каждый аргумент принимает 1 параметр. Функция `compose` возвращает другую функцию с одним параметром.

Суть работы функции `compose` отображает данная формула `compose(f, g)(x) = f(g(x))`

Пример вызова:

```javascript
compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'
```
*/

const compose = (...args) => function (startValue) {
  return args.reduceRight((acc, currentCb, i) => {
    if (typeof currentCb !== 'function') throw new Error(`Argument ${i} is not a function`);

    return currentCb(acc);
  }, startValue)
}

const a = compose((str) => {
  return str + 'c';
}, (str) => {
  return str + 'b';
})('a'); // 'abc'

console.log(a)
