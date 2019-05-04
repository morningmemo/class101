import UserDao from '../models/UserDao';

const users = {

	list( res) {
		UserDao.getAll(users => res.json(users));
	},

	create(body, res) {
		UserDao.add(body, rslt => res.json(rslt.insertId));
	},

	read(id, res) {
		UserDao.get(id, user => res.json(user));
	}
}

export default users