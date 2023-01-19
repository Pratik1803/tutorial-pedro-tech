const { UserList, MovieList } = require("../data");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },

    user: (parent, args) => {
      const id = Number(args.id);
      const user = _.find(UserList, { id });
      return user;
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },

    movie: (parent, args) => {
      const movie = _.find(MovieList, { name: args.name });
      return movie;
    },
  },

  // RESOLVER FOR USERS
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

  // MUTATIONS
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastUser = UserList[UserList.length - 1];
      user.id = lastUser.id + 1;
      UserList.push(user);
      return user;
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userRes;
      UserList.forEach((user) => {
        if (user.id == Number(id)) {
          user.username = newUsername;
          userRes = user;
        }
      });
      return userRes;
    },
  },
};

module.exports = { resolvers };
