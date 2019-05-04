const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class User extends DAO {

    static get PRIMARY_KEY() {
        return "user_id"
    }

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'users'
    }

    /**
     * Returns a User by its ID
     */
    static async getByID(_, {user_id}) {
        return await this.find(user_id)
    }

    /**
     * Returns a list of Users matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all Users if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching Users
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new User
     */
    static async createEntry(_, {name}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    name,
                    created_at: new Date()
                }
            })

            return this.getByID(_, {user_id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = User