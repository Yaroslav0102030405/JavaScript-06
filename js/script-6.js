/*
* План занятия
*
* - Операция spread
* - Деструктуризация и операция rest
*/

// - Операция spread (распыление)
// - Array.prototype.concat() и аналог через dpread
// на самом деле это дудет вот так [].concat()
// эта конкатенация позволяет взять два или больше массивов и сделать новый массив в котром будет все элементы из старого массива

/*
* Сделаем простой массив
*/
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// // конкат делате новый массив и ничего не изменяет

// console.log(numbers);
// есть более новый синтаксис который изменяет concat()

/*
* Операция rest... распыление
*/
// const numbers = [100, ...[1, 2, 3], 300, ...[4, 5, 6], 500, ...[7, 8, 9], 700];
// распыление берет калекцию и распаковыввает ее в другую коллекцию это аналог канкат
// очень удобно если нужно поставить эелемент в разные места будут тут обьекты поставить обьекты будут строки поставит строки
// если там стоять примитивы то делает копии если там лежат сложные типы обьекты или массивы то ставит там ссылку на них
// синтаксис у рест и спред одинаковый это три точки
// в зависимости от того где мы их поставим будет операция или распыление или збора

// console.log(numbers);

// /*
// * Поиск самой маленькой или большой температуры (числа)
// */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));

// // console.log(Math.min(temps)) тут ничего не будет потому что Math.max ожидает что будет независимый набор аргументов
// // не один массив аргументов а набор он в массиве искать не умеет только ищет в аргументах
// console.log(Math.min(...temps));
//  когда ты применяешь распыление ты можешь распылить при передаче аргумента в фукнции
// операция spread (распыление) не деструктивная с этим массивом ничего не происходит
// делается копия его элементов
// если его элементы это примитивы то делается копия
// если элементы этого массива обьекты ставиться ссылка

/*
* В этом примере передача по значению то есть незавиcимая копия элемента а были скопированны в b
*/
// const a = [1, 2, 3];

// const b = [...a];

// console.log(a);
// console.log(b);

/*
* Пример по ссылке.
*/
// Так как єто сложнный тип то не проиходит копирование а ставиться ссылочка
// const a = [{a: 1}, {b: 2}, {c: 3}];

// const b = [...a];

// console.log(a);
// console.log(b);

/*
* Сшиваем несколько массивов в один через spread
*/
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nwxtWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nwxtWeekTemps];

// console.log(allTemps);

/*
* Распыление обьектов
*/
// - Object.prototype.assign() и spread
// В массиве может быть произвольное количество одинаковых элементво
// А вот свойсвтв двух одинаковых в обьекте не может быть. Свойтва уникальные в обьекте
// Если вы делаете обьект с двумя одинаковыми свойствами то повторяющееся свойства (значения) перезаписываются на последний
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);
// // старый синтаксис

// const c = {
//     ...a,
//     ...b,
// };
// // современный синтаксис

// console.log(c);
// туту вы передаете первым куда вы будете распылять обьект

// В массиве важен просто порядок распыление на выходе будет порядок элементов будет
// а в обьекте порядок распыление влияет на конечное значение свойств одинаковых

/*
* Числа не распыляются
*/
// console.log(...5)

/*
* Распыляются строки обьекты массивы
*/
// console.log(...'qwe')

// Нужно поменять настройки которые храняться в брайзере
// Эти настройки храняться не в базе данных а на твоем компе в браузер
// const detaultSettings = {
//     there: 'light',
//     showNotifications: false,
//     hideSidebar: true,
// };

// const userSettings = {
//     showNotifications: true,
//     hideSidebar: false,
// };
// тут нужно взять дефолтные настройки и слить с твоими настройками чтобы получить финальные настройки

// const finalSettings = {
//     ...detaultSettings,
//     ...userSettings,
// };

// console.log(finalSettings);
// сначала применяться дефолтные настройки
// потом применяеться настройки которые ты переопределил

// Мы стремимся в разработке писать декоративный код код который легко читается
// где не нужно разбираться что там в нем происходит
// по имени или операции ты уже знаешь какой будет результат

/*
* Сейчас мы научимся разьархивировать или распаковывать обьекты и массивы
*/
// Деструктуризация обьекта
// - Значения по умолчанию
// - Имя переменно отличное
// const playList = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//     trackCount: 3,
// };

// const {
//     name,
//     rating,
//     tracks,
//     trackCount: numberOfTracks = 0,
    // тут возможность переназвать переменную в котороый лежит какое-то свойство
    // задать дефолтное значение = 0
//     author = 555
// } = playList;
// что если вам нужно чтобы локальная переменная имела другое имя чем свойство на обьекте
// чтобы перемення trackCount называлась по другому
// console.log(numberOfTracks)
// если нужно присвоить значение по умолчанию то ставите =
// console.log(author);

/*
* Правило 1. Имя локальной переменной должно совпадать с именем свойств в этом обьекте
*/
// tracks.push('qwwertt');

// console.log(tracks);

// console.log(playList);

// const [] = [1, 2, 3];

/*
* Деструктуризация массива будет выглядеть вот так
*/
// console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);

// console.log(
//     name,
//     rating,
//     tracks,
//     trackCount
// );

/*
* Если вы слева от равно увидили такие скобки то это операци деструктуризация или распаковки
*/
// console.log(
//     playList.name,
//     playList.rating,
//     playList.tracks,
//     playList.trackCount
// );
// тут много повторяется слово плейлист. Это визаульный муссор. Плохо читается.
// придумали дуструктуризацию чтобы от этого уберечся и сделать код проще

// Ты пишешь код чтобы потом можно было легко его читать тобой или другим разработчиком

/*
* Глубокая деструктуризация
*/
// - А если у нас есть обьект в котором лежит еще один обьект? Вторая вложенность
// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https: фото',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

/*
* Вариант 1
*/
// const { name, tag, location, avatar, stats } = profile;

// const { followers, views, likes } = stats;

/*
* Деструктуризируем второй обьект
*/
// console.log(name, tag, location, avatar, followers, views, likes);

/*
* Второй вариант
*/
// const {
// name,
// tag,
// location,
// avatar,
// stats: { followers, views, likes },
// возьми то что лежит в свойстве stars и деструктуризируй еще эти переменные тоже – это называется
// глубокая деструктуризация
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
* Вариант 3 Третья вложенность обьекта
*/
// const profile = {
// name: 'Jacques Gluke',
// tag: 'jgluke',
// location: 'Ocho Rios, Jamaica',
// avatar: 'https: фото',
// stats: {
// followers: 5603,
// views: 4827,
// likes: 1308,
// a: {
// b: 1,
// c: 2,
// d: 3,
//     },
//   },
// };

// const {
// name,
// tag,
// location,
// avatar,
// stats: {  followers, views, likes,
// a: { b, c, d },
// },
// } = profile;
// console.log(name, tag, location, avatar, followers, views, likes, b, c, d);
// Обычно глубина вложенности 2 и больше не бывает таких супер сложных обьектов
// Если в обьекте есть метод то оно положит сссылку на эту функцию какую-то переменную
// В операции дуструктуризации вы забераете только то что вам необходимо
// В обьекте свойства не имеют порядка
// ВНИМАНИЕ! Вы никогда не деструктуризируете  обьекты на которых есть функции

/*
* Два раза одно свойство можно деструктуризировать? Да
*/
// Только это будут две разные деструктуризации
// const { name: name1 } = profile;
// const { name: name2 } = profile;
// console.log(name1, name2);
// В одной операции две разные переменные записать нельзя
// В одной деструктуризации нельзя записать в две разные переменные записать значение одного и того же свойства это ограничение.
// В 99% случаев вы будете юзать деструктуризацию обьектов

/*
* Деструктуризация массивов
*/
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;
// // В переменную а будет записан елемент под индексом 0
// // В каком порядке обьявили переменные в таком порядке в них записались эти значения
// // Первый элемент в а второй элемент в б третий в с
// console.log(red, green, blue);

// В реакте с хуками она постоянно юзжается
// Массивы деструктуризируются по порядку
// Деструктуризация массива это слева от равно стоят квадратные скобки а справа какой-то массив

/*
* Пример. Если вам нужно пропустить свойство
*/
// Взять только красный и синий цвет а зеленый пропустить
// const rgb = [255, 100, 80];
// const [red,  , blue] = rgb;
// вы ставите запятую как будто пропуск свойства
// первое запиши в red второе проигнорируй а третье запиши в blue
// console.log(red, blue);

/*
* Пример где можно это юзать
*/
// Задача 1 Найти самый большой рейтинг с автором
// const authors = {
// kiwi: 4,
// poly: 7,
// ajax: 9,
// mango: 6,
// };
// // Самый простой способ
// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));
// мы получили 9 но мы не получили имя автора

/*
* 2 вариант
*/
// const keys = Object.keys(authors);
// for (const key of keys) {
// console.log(key);
// console.log(authors[key]);
// }
// В случае если вы хотите по значению получить еще имя ключа в результате есть Object.entries
// Object.entries  - возвращает массив массивом

/*
* 3 вариант
*/
// const entries = Object.entries(authors);
// for (const entry of entries) {
//     const name = entry[0];
//     const rating = entry[1];

// console.log(name, rating);
// };

/*
* 4 вариант
*/
// const entries = Object.entries(authors);
// for (const entry of entries) {
// const [name, rating] = entry;
// console.log(name, rating);
// };

/*
* 5 вариант
*/
// const entries = Object.entries(authors);
// for (const [name, rating]  of entries) {
// // вы сразу деструктуризируете какое-то значение которое есть на текущей итерации
// console.log(name, rating);
// };

/*
* Операция rest (сбор)
*/
// Бывают такие случаи когда необходимо из обьекта выкинуть определенное количество свойств локальной переменных а все остальные свойства собрать в какой-то произвольный обьект
// Аватар и старт собрать в другой обьект чтобы кинуть его глубже
// const profile = {
// name: 'Jacques Gluke',
// tag: 'jgluke',
// location: 'Ocho Rios, Jamaica',
// avatar: 'https: фото',
// stats: {
// followers: 5603,
// views: 4827,
// likes: 1308,
//       },
// };

// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);
// Конечно у каждой задачи есть более лучшее решение
// Например нахождение  самого большого или маленького числа пишется в одну строку через распыление и мас мак …Math.max() без форма без тотала

// Очень часто вы будете свои функции получать не просто какой-то набор аргументов а один обьект
// Это паттерн и называется это обьект настроек
// В чем проблема функций с большим количеством аргументов
// Обьект с подписанными свойствами

/*
* Патеерн «Обьект настроек»
*/
// - Деструктуризация параметра-обьекта в подписи функции
// - rest при деструктуризации в подписи
// Обьект без подписанных свойств
// Fn(10, 5, true, [ ], { }, 6);
// Тут вообще ничего не понять
// Обьект с подписанными свойствами
// const fn = function () { };
// fn({
// age: 10,
// friends: 5,
// isOnline: true,
// hobbies: [ ],
// games: { },
// rating: 6,
// });
// Тут понятно и читабелен код это и есть паттерн обьект настроек
// Когда применятеся паттерн обьект настроект? Когда у вашей функции 3 или больше аргументов

// const showProfileInfo = function (userProfile) {
//   // console.log(userProfile)
//       // функция получает этот обьект и в будущем как-то будет с ним работать
//       // Эта функция будет использовать свойства с этого обьекта name, tag, location
//       // И вы хотите в этой функции деструктуризировать эти свойства в ее локальной переменной
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;
//       // Это пример деструктуризации в теле функции и кто-то делает именно так
//       // Или деструктеризация может быть проведена прямо в подписи функции
//   console.log(name, tag, location, avatar, followers, views, likes);
// };
// // Свойства должны называться так как хочет функция чтоб вашем обьекте они назывались это в документации можно посмотреть.

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https: фото',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);
// мы кинули сюда обьект с подписанными свойствами

/*
* Или деструктеризация может быть проведена прямо в подписи функции
*/
// const showProfileInfo = function ({ name, tag, location, avatar, start: { followers, views, likes }, }) {

// console.log(name, tag, location, avatar, followers, views, likes);
// };
// Скорее всего вы так сделаете когда у вас будет 2-3 свойства вы их деструктуризируете прямо тут подписи функции а когда будет 50 свойств тогда сделаете это в теле функци
// }

/*
* ...rest
*/
// Тут тоже можно применить rest
// const showProfileInfo = function ({
// name,
// tag,
// location,
// avatar,
// …restProps,
// } = userProfile;
// console.log(restProps);
// };
// Это будет довольно часто потому что плагины настраиваете библиотеки подключаете все настройки идут в виде обьектов

// Всегда нужен обьект настроек функциям
// Желательно ваши функции писать так чтобы они ожидали обьект настроек если у вас больше чем 2 аргумента

/*
* Работаем с коллекцией товаров в корзине:
*/
// - getIitems()
// - add(product)
// - remove(productName)
// - clear()
// - countTotalPrice()
// - increaseQuantity(productName)
// - decreaseQuantity(productName)

// { name:  ‘apple’, price: 50 }
// { name:  ‘grape’, price: 70 }
// { name:  ‘lemon’, price: 60 }
// { name:  ‘strawberry’, price: 110 }

// const cart = {
//   item: [],
//   getIitems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'grape', price: 70 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });

// cart.remove('apple');

// const lastWeekTemps = [1, 2, 3]
// const currentTemps = [4, 5, 6]
// const nextWeekTemps = [7, 8, 9]

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps]

// console.log(allTemps)

// const a = { x: 1, y: 2, g: { hello: 'Wodr' }}
// const b = { x: 2, z: 0 }


// const c = {... a, ...b}

// console.log(c)

// const defaultSetting = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// }

// const userSetting = {
//   showNotifications: false,
//   hideSidebar: true,
// }

// const finalSetting = {
//   ...defaultSetting,
//   ...userSetting,
// }

// console.log(finalSetting)

// Деструктуризация обьекта - распаковка применяэться для разархивирование обьекта


// const playList = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   trackCount: 3,
// }

// // Операция деструктуризация применя.ться чтобы работать со значениями
// // const { name, rating, tracks, trackCount } = playList

// // если нужно присвоить значение по умолчанию вы пишете сначала новое ствойство ставите = и значение
// // изменить название переменной после : написать новое
// const { name, rating, tracks, trackCount: newCount = 0, author = 'Николай' } = playList

// // tracks.push('Трек-4')

// // console.log(tracks)

// console.log(name, rating, tracks, newCount, author)

// Пример обьект и внуть вложен еще один обьект
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jqluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://adme.media/tvorchestvo-fotografy/20-rasslablyayuschih-foto-na-kotoryh-minimum-detalej-i-maksimum-smysla-1856565/',
//   stats: {
//     tollowers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // Это называеться глубокая деструктуризация
// const {name, tag, location, avatar, stats: {tollowers, views, likes}, } = profile

// console.log(name, tag, location, avatar, tollowers, views, likes)

// Деструктуризация массивов
// const rgb =  [255, 80, 130]

// const [a, b, c] = rgb

// console.log(a, b, c)

// если нужно пропустить какое-то значение
// const rgb =  [255, 80, 130]

// const [a, , c] = rgb

// console.log(a, c)

// const author = {
//   mango: 1,
//   kiwi: 2,
//   poly: 3,
//   ajax: 4,
// }

// const entries = Object.entries(author)

// for (const entry of entries) {
//   const [name, rating] = entry

//   console.log(name, rating)
// }

// Операция рест - сбор
//  const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jqluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://adme.media/tvorchestvo-fotografy/20-rasslablyayuschih-foto-na-kotoryh-minimum-detalej-i-maksimum-smysla-1856565/',
//     stats: {
//       tollowers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   const {name, tag, location, ...restProps} = profile

//   console.log(name, tag, location)
//   console.log(restProps)

// Как передовать обьекты в функцию
// Часто вы будете получать в свои функции один обьект - это паттерн обьект настроек
// если у вас 4 аргумента то стоит делать паттерн
// const fn = function (params) {
//   return params
// }

// console.log(fn({
//   age: 10,
//   frisnds: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6,
// }))


const profile = {
  name: 'Jacques Gluke',
  tag: 'jqluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://www.google.com/search?sxsrf=AB5stBiby37Kb3IBfnoJ7TaKgG9c-qg5yw:1690363108582&q=%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj2joOlhayAAxWtCBAIHfKmCKIQ0pQJegQIDBAB&biw=1536&bih=747&dpr=1.25#imgrc=R0oKC-2-Ec6wMM',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// const showProfileInfo = function (userProfile) {
//   const {name, tag, location, avatar, stats: {tollowers, views, likes}} = userProfile;
//   console.log(name, tag, location, avatar, tollowers, views, likes)
//   }


// showProfileInfo(profile)

const makeProfileMarkup = function (userProfile) {
  const {name, tag, location, avatar, stats: {followers, views, likes}} = userProfile

  return `<div>
<img src="${avatar}" alt="user avatar">
<p>${name}<span>@${tag}</span></p>
<p>${location}</p>
<ul>
<li>Followes: ${followers}</li>
<li>Views: ${views}</li>
<li>Likes: ${likes}</li>
</ul>
  </div>`
};

const markup = makeProfileMarkup(profile)
console.log(markup)

document.body.insertAdjacentHTML('afterbegin', markup)


