import CommentDao from '../models/CommentDao';

const comments = {

	list( res) {
		CommentDao.getAll(comments => res.json(comments));
	},

	create(postId, body, res) {
		CommentDao.add(postId, body, rslt => res.json(rslt.insertId));
	},

	read(id, res) {
		CommentDao.get(id, comment => res.json(comment));
	},

	update(id, data, res) {
		CommentDao.update(id, data, rslt => res.status(204).send());
	},

	delete(id, res) {
		CommentDao.remove(id, rslt => res.status(204).send());
	},

	getByUser(userId, res) {
		CommentDao.getByUser(userId, comments => res.json(comments));	
	},

	getByPost(postId, req, res) {
		var page = parseInt(req.page);
		var pageCount = parseInt(req.page_count);
		var pageCountLimit = 10;
		var offset = (page - 1) * (pageCount > pageCountLimit ? pageCountLimit : pageCount);
		
		CommentDao.getByPost(postId, offset, pageCount, comments => res.json(comments));
	}
}

export default comments