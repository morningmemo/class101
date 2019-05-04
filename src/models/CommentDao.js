import Dao from './Dao';
import myUtils from '../lib/myUtils';

class CommentDao extends Dao {
  constructor() {
    super();
  }

  getAll(callback) {
    this.db.createQuery({
      query: "select * from comments"
    }).then(callback);
  }

  get(id, callback) {
    this.db.createQuery({
      query: "select * from comments where comment_id = ? limit 1",
      params: id
    }).then(callback);
  }

  getByUser(userId, callback) {
    this.db.createQuery({
      query: "select * from comments where writer = ?",
      params: userId
    }).then(callback);
  }

  getByPost(postId, offset, limit, callback) {
    this.db.createQuery({
      query: "select * from comments where post_id = ? limit ?, ?",
      params: [postId, offset, limit]
    }).then(callback);
  }

  add(postId, data, callback) {
    let insertData = myUtils.jsonFilter(data, ['contents','writer']);
    let addedData = {
      post_id: postId,
      created_at: new Date()
    }
    insertData = {...insertData, ...addedData};

    this.db.createQuery({
      query: 'insert into comments set ?',
      params: insertData
    }).then(callback);
  }

  update(id, data, callback) {
    var updatedData = myUtils.jsonFilter(data, ['contents']);
    this.db.createQuery({
      query: 'update comments set ? where comment_id = ?',
      params: [updatedData, id]
    }).then(callback);
  }

  remove(id, callback) {
    this.db.createQuery({
      query: 'delete from comments where comment_id = ?',
      params: id
    }).then(callback);
  }
}

export default CommentDao = new CommentDao();