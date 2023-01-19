const UserList = [
  {
    id: 1,
    name: "Pedro1",
    username: "PedroTech1",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro2",
        username: "PedroTech2",
        age: 20,
        nationality: "CANADA",
      },
      {
        id: 4,
        name: "Pedro4",
        username: "PedroTech4",
        age: 20,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro2",
    username: "PedroTech2",
    age: 20,
    nationality: "CANADA",
  },
  {
    id: 3,
    name: "Pedro3",
    username: "PedroTech3",
    age: 20,
    nationality: "CANADA",
  },
  {
    id: 4,
    name: "Pedro4",
    username: "PedroTech4",
    age: 20,
    nationality: "CANADA",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublication: 2035,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
