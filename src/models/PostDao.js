import Dao from './Dao';
import myUtils from '../lib/myUtils';

class PostDao extends Dao {
  constructor() {
    super();
  }

  getAll(callback) {
    this.db.createQuery({
      query: "select * from posts"
    }).then(callback);
  }

  get(id, callback) {
    this.db.createQuery({
      query: "select * from posts where post_id = ? limit 1",
      params: id
    }).then(callback);
  }

  getByUser(userId, callback) {
    this.db.createQuery({
      query: "select * from posts where writer = ?",
      params: userId
    }).then(callback);
  }

  add(data, callback) {
    let insertData = myUtils.jsonFilter(data, ['title','contents','writer']);
    insertData['created_at'] = new Date();
    this.db.createQuery({
      query: 'insert into posts set ?',
      params: insertData
    }).then(callback);
  }

  update(id, data, callback) {
    var updatedData = myUtils.jsonFilter(data, ['title','contents']);
    this.db.createQuery({
      query: 'update posts set ? where post_id = ?',
      params: [updatedData, id]
    }).then(callback);
  }

  remove(id, callback) {
    this.db.createQuery({
      query: 'delete from posts where post_id = ?',
      params: id
    }).then(callback);
  }
}

export default PostDao = new PostDao();