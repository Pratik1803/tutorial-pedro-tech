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
};

module.exports = { resolvers };
