import Dao from './Dao';

class UserDao extends Dao {
  constructor() {
    super();
  }

  getAll(callback) {
    this.db.createQuery({
      query: "select * from users"
    }).then(callback);
  }

  get(id, callback) {
    this.db.createQuery({
      query: "select * from users where user_id = ? limit 1",
      params: id
    }).then(callback);
  }

  add(data, callback) {
    var insertData = {
      'name' : data.name,
      'created_at' : new Date()
    }
    this.db.createQuery({
      query: 'insert into users set ?',
      params: insertData
    }).then(callback);
  }
}

export default UserDao = new UserDao();