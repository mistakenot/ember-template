import Mirage from 'ember-cli-mirage';

export default function(config) {

  config.post('/users', (db, request) => {

  });

  config.get('/users');

  config.get('/users/current', (db, request) => {
    const auth = request.requestHeaders.Authorization;

    if(auth) {
      var id = parseInt(auth.replace('Bearer '));
      return db.users.find(id);
    } else {
      return new Mirage.Response(401, {}, {});
    }
  });

}
