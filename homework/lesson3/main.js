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