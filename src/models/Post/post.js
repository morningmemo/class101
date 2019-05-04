const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Post extends DAO {

    static get PRIMARY_KEY() {
        return "post_id"
    }

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'posts'
    }

    /**
     * Returns a Post by its ID
     */
    static async getByID(_, {post_id}) {
        return await this.find(post_id)
    }

    /**
     * Returns a list of Posts matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all Posts if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching Posts
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new Post
     */
    static async createEntry(_, {title, contents, writer}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    title,
                    contents,
                    writer,
                    created_at: new Date()
                }
            })

            return this.getByID(_, {post_id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a post 
     */
    static async updateEntry(_, {post_id, title, contents}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id: post_id,
                data: {
                    title,
                    contents
                }
            })

            return this.getByID(_, {post_id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Returns a Post by its ID
     */
    static async removeEntry(_, {post_id}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            await this.delete(connection, {
                id: post_id
            });
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Post