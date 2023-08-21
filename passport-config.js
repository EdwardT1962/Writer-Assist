const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = function(passport, client) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
      const user = result.rows[0];
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};
