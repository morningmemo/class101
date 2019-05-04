import PostDao from '../models/PostDao';

const posts = {

	list( res) {
		PostDao.getAll(posts => res.json(posts));
	},

	create(body, res) {
		PostDao.add(body, rslt => res.json(rslt.insertId));
	},

	read(id, res) {
		PostDao.get(id, post => res.json(post));
	},

	update(id, data, res) {
		PostDao.update(id, data, rslt => res.status(204).send());
	},

	delete(id, res) {
		PostDao.remove(id, rslt => res.status(204).send());
	},

	getByUser(userId, res) {
		PostDao.getByUser(userId, posts => res.json(posts));	
	}
}

export default posts