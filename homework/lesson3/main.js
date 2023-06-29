// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${'Hello'}</div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} ${'Hello'}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while (i < 20) {
//     document.write(`<div>${'Hello'}</div>`)
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while (i < 20) {
//     document.write(`<div>${i} ${'Hello'}</div>`)
//     i++
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (const listOfItem of listOfItems) {
// document.write(`<li>${listOfItem}</li>`)
// }
//
// document.write(`</ul>`)
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// //
// for (const product of products) {
//     document.write(`
//         <h3> TITLE - ${product.title}  Price - ${product.price} </h3>
//         <img src="${product.image}" alt="">
//     `)
// }
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------

//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// for (const user of users) {
//     if (user.status) {
//         document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     }
// }
// - користувачів зі статусом false
// for (const user of users) {
//     if (!user.status) {
//         document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     }
// }
// - користувачів які старші за 30 років
// for (const user of users) {
//     if (user.age > 30) {
//         document.write(`<div>${user.name} ${user.age} ${user.status}</div>`)
//     }
// }

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let emptyArr = [];
// emptyArr[5] = 12
// console.log(emptyArr)
//
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
//     let i = 0
//     while (i < arr.length) {
//         document.write(`<div>${arr[i]}</div>`)
//         i++
//     }
//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     document.write(`<div>${arrElement}</div>`)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arrElement % 2) {
//         document.write(`<div>${arrElement}</div>`)
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arrElement % 2 == 0) {
//         document.write(`<div>${arrElement}</div>`)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// const newArr = [];
// for (const number of arr) {
//     if (number % 3 === 0) {
//         newArr.push('okten')
//     } else {
//         newArr.push(number)
//     }
// }
// console.log(newArr)
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten'
//     }
//     console.log(arr[i])
// }

// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement)
//
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const arr = [];
// const array = [1,2,3,true, 2,6, false, true, 'bodia', 1 , 5, true, 'baryliak']
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (typeof arrayElement === "string") {
//         arr.push(arrayElement)
//     }
// }
// console.log(arr)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//

// -знайти наібльшу книжку. стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// const books = [
//     {
//         title: 'To Kill a Mockingbird',
//         pageCount: 281,
//         authors: ['Harper Lee'],
//         genres: ['Classic', 'Fiction', 'Adventure']
//     },
//     {
//         title: '1984',
//         pageCount: 328,
//         authors: ['George Orwell'],
//         genres: ['Dystopian', 'Fiction']
//     },
//     {
//         title: 'Pride and Prejudice',
//         pageCount: 432,
//         authors: ['Jane Austen', 'Jane Austen'],
//         genres: ['Classic', 'Romance', 'Adventure']
//     },
//     {
//         title: 'The Great Gatsby',
//         pageCount: 180,
//         authors: ['F. Scott Fitzgerald'],
//         genres: ['Classic', 'Fiction', 'Adventure', 'Adventure']
//     },
//     {
//         title: 'To the Lighthouse',
//         pageCount: 209,
//         authors: ['Virginia Woolf', 'Jane Austen'],
//         genres: ['Modernist', 'Fiction', 'Adventure', 'Adventure']
//     },
//     {
//         title: 'The Catcher in the Rye',
//         pageCount: 224,
//         authors: ['J.D. Salinger'],
//         genres: ['Coming-of-age', 'Fiction']
//     },
//     {
//         title: 'Harry Potter and the Philosopher\'s Stone',
//         pageCount: 223,
//         authors: ['J.K. Rowling'],
//         genres: ['Fantasy', 'Young Adult']
//     },
//     {
//         title: 'The Hobbit',
//         pageCount: 310,
//         authors: ['J.R.R. Tolkien'],
//         genres: ['Fantasy', 'Adventure', 'Adventure', 'Adventure']
//     },
//     {
//         title: 'The Hunger Games',
//         pageCount: 374,
//         authors: ['Suzanne Collins'],
//         genres: ['Dystopian']
//     },
//     {
//         title: 'The Alchemist',
//         pageCount: 197,
//         authors: ['Paulo Coelho'],
//         genres: ['Fiction']
//     }
// ];

// - знайти книжку/ки з найбільшою кількістю жанрів
// let genres = books[0]
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.genres.length > genres.genres.length) {
//         genres = book
//     }
// }
// console.log(genres);
// let maxGenresCount = 0;
// let maxGenresBooks = [];
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.genres.length > maxGenresCount) {
//         maxGenresCount = book.genres.length;
//         maxGenresBooks = [book];
//     } else if (book.genres.length === maxGenresCount) {
//         maxGenresBooks.push(book);
//     }
// }
//
//console.log(maxGenresBooks);
// let maxGenresCount = 0
// let maxGenresBooks = [];
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.genres.length > maxGenresCount) {
//         maxGenresCount = book.genres.length;
//         maxGenresBooks = [book]
//     } else if (book.genres.length === maxGenresCount) {
//         maxGenresBooks.push(book);
//     }
// }
//
// console.log(maxGenresBooks);
//
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// let twoAuthorsArr = [];
//
// for (const book of books) {
//     if (book.authors.length === 2) {
//         twoAuthorsArr.push(book);
//     }
// }
//
// console.log(twoAuthorsArr);
// - знайти книжку/ки які писав 1 автор

/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
        * за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
        *
        * */
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Robel-Corkery',
//             catchPhrase: 'Multi-tiered zero tolerance productivity',
//             bs: 'transition cutting-edge web services'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Johns Group',
//             catchPhrase: 'Configurable multimedia task-force',
//             bs: 'generate enterprise e-tailers'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];
// for (const usersListElement of usersList) {
//     document.write(`<div>
//         <div>
//             <h2>${usersListElement.id} ${usersListElement.name} ${usersListElement.username}</h2>
//             <h3>${usersListElement.email}</h3>
//             <div>
//                 <p>${usersListElement.address.city}</p>
//                 <p>${usersListElement.address.street}</p>
//                 <p>${usersListElement.address.suite}</p>
//                 <p>${usersListElement.address.zipcode}</p>
//             </div>
//         </div>
//     </div>`)
// }

// 1. Створити пустий масив та :
let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     arr.push(i * 2)
// }
// console.log(arr)
//     b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 1; i <= 100; i+=2) {
//     arr.push(i)
// }
// console.log(arr)

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.round(Math.random()* 100))
// }
// console.log(arr)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.round(Math.random() * (732 - 8) + 8))
// }
// console.log(arr)
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < 20; i+=3) {
//     arr.push(Math.round(Math.random() * (732 - 8) + 8))
// }
// console.log(arr)
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < 20; i+=3) {
//         let arrElement = Math.round(Math.random() * (732 - 8) + 8)
//     arr.push(arrElement)
//     if (arrElement % 2 === 0) {
//         console.log(arrElement)
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


