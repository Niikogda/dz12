// # Критерії прийому

// -   Створено репозиторій `hw-js-this `

// -   Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
//     Використовуй `<script type="module">` щоб закрити код завдання в окремій
//     області видимості і уникнути конфліктів імен ідентифікаторів.
// -   Імена змінних зрозумілі, описові
// -   Код відформатований за допомогою Prettier

// # Завдання 1

// Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
// метод `introduce()`, який повертає рядок зі словами
// `Мене звати {ім'я}, мені {вік} років я {стать}`.

// Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
// `name` на нове ім'я.

// Використайте ключове слово `this` для дос тупу до властивостей об'єкту.

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",

  introduce() {
    return `Мене звати ${this.name}, мені ${this.age} років, я ${this.gender}.`;
  },
  changeName(newName) {
    this.name = newName;
  },
};
console.log(person.introduce());
person.changeName("Jane Doe");
console.log(person.introduce());

// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  speed: 100,
  showInfo() {
    console.log(
      `Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`
    );
  },
};

const location = {
  city: "Kyiv",
  distance: 300,
};

function showTime(car, location) {
  const time = location.distance / car.speed;
  console.log(
    `Автомобіль ${car.brand}, марки ${car.model} дістанеться міста ${
      location.city
    } за ${time.toFixed(2)} годин.`
  );
}

car.showInfo();
showTime(car, location);

// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

const students = [
  { name: "John", age: 22, rating: 8 },
  { name: "Jane", age: 20, rating: 9 },
  { name: "Doe", age: 23, rating: 7 },
];

function greet() {
  return `Привіт, мене звати ${this.name}!`;
}
const greetings = students.map((student) => greet.call(student));
console.log(greetings);
const highRatedStudents = students.filter((student) => student.rating > 7.5);
console.log(highRatedStudents);

function addRating(points) {
  this.rating += points;
}
students.forEach((student) => addRating.call(student, 1));

console.log(students);

// # Завдання 4

// Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
// об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
// Додайте до об'єкту метод "balanceInfo", який виводить поточний баланс
// користувача в консоль.

// Створіть масив "users", який містить кілька об'єктів типу "user". Використовуючи
// метод "forEach()", викличте метод "addMoney" на кожному елементі масиву "users".
// Використовуючи метод "filter()", створіть новий масив, який міститиме тільки ті
// об'єкти типу "user", у яких баланс більший за вказану суму. Використовуючи метод
// "map()", створіть новий масив, який містить баланс кожного користувача з масиву
// "users". Виведіть цей масив в консоль.

// Використайте метод "call()", щоб викликати метод "balanceInfo" на конкретному
// об'єкті "user". Перевірте, що в контексті методу "balanceInfo" значення "this"
// вказує на конкретний об'єкт "user".

// ```js
// const users = [
//     { name: 'Alice', balance: 500 },
//     { name: 'Bob', balance: 200 },
//     { name: 'Charlie', balance: 1000 },
// ];
// ```

function createUser(name, initialBalance) {
  return {
    name: name,
    balance: initialBalance,
    addMoney(amount) {
      this.balance += amount;
    },
    balanceInfo() {
      console.log(`${this.name} has a balance of ${this.balance}.`);
    },
  };
}

const users = [
  createUser("Alice", 500),
  createUser("Bob", 200),
  createUser("Charlie", 1000),
];
users.forEach((user) => user.addMoney(100));
const usersWithHighBalance = users.filter((user) => user.balance > 600);
console.log(usersWithHighBalance);
const userBalances = users.map((user) => user.balance);
console.log(userBalances);
users[0].balanceInfo.call(users[0]);

// # Завдання 5

// Створіть об'єкт "user" з властивостями "ім'я", "прізвище" та масивом "friends".
// У цьому масиві зберігаються об'єкти, кожен з яких містить ім'я та прізвище
// друга.

// Створіть функцію "friendsInfo", яка використовує метод масиву "forEach" для
// перебору масиву друзів користувача та виводу їх імені та прізвища у консоль. У
// цій функції використовуйте ключове слово "this" для звернення до поточного
// об'єкту.

// Створіть ще один об'єкт "user" зі своїми властивостями та масивом друзів та
// викличте функцію "friendsInfo" для обох об'єктів, передаючи контекст через
// методи "call()" чи "apply()". Виведіть результат у консоль.

// ```js
// const user1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     friends: [
//         { firstName: 'Jane', lastName: 'Doe' },
//         { firstName: 'Bob', lastName: 'Smith' },
//         { firstName: 'Alice', lastName: 'Wonderland' },
//     ],
// };

// const user2 = {
//     name: 'Juan',
//     surname: 'Hernandez',
//     friends: [
//         { name: 'Maria', surname: 'Garcia' },
//         { name: 'Carlos', surname: 'Rodriguez' },
//         { name: 'Ana', surname: 'Lopez' },
//     ],
// };
// ```
function friendsInfo() {
  this.friends.forEach((friend) => {
    console.log(
      `${friend.firstName || friend.name} ${friend.lastName || friend.surname}`
    );
  });
}

const user1 = {
  firstName: "John",
  lastName: "Doe",
  friends: [
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Alice", lastName: "Wonderland" },
  ],
};

const user2 = {
  name: "Juan",
  surname: "Hernandez",
  friends: [
    { name: "Maria", surname: "Garcia" },
    { name: "Carlos", surname: "Rodriguez" },
    { name: "Ana", surname: "Lopez" },
  ],
};

friendsInfo.call(user1);
friendsInfo.call(user2);
