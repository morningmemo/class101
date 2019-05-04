const mysql = require('../lib/mysqlWrapper')

'use strict';

// connect to db
class Dao {
	constructor() {
		this.db = mysql;
	}
}

export default Dao;