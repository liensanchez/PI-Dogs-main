const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3003, () => {
    console.log('Abrimos el puerto at 3003'); // eslint-disable-line no-console
  });
});
