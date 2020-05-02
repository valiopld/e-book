let __fakeDB = [];

const nBooks = 90;
const rAuthors = [
  "Valentin Peshev",
  "Ivelina Ivanova",
  "Georgi Matov",
  "Teodora Doncheva",
];

const rCategorys = [
  "Fantasy",
  "Poetry",
  "Romance",
  "Mistery",
  "Short story",
  "Science",
];
const rYear = ["2000", "2002", "2015", "2019"];

for (let i = 0; i < nBooks; ++i) {
  let newBook = {};
  newBook.ID = i;
  newBook.author = rAuthors[Math.floor(Math.random() * rAuthors.length)];
  newBook.category = rCategorys[Math.floor(Math.random() * rCategorys.length)];
  newBook.name = `best Book of ${newBook.category}`;
  newBook.link = `/${newBook.author
    .replace(/\s/g, "-")
    .toLowerCase()}/${newBook.name.replace(/\s/g, "-").toLowerCase()}`;
  newBook.year = new Date(
    rYear[Math.floor(Math.random() * rYear.length)]
  ).getFullYear();

  __fakeDB.push(newBook);
}

export default __fakeDB;
