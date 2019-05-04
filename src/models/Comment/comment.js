const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
import myUtils from '../../lib/myUtils'

class Comment extends DAO {

    static get PRIMARY_KEY() {
        return "comment_id"
    }

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'comments'
    }

    /**
     * Returns a Comment by its ID
     */
    static async getByID(_, {comment_id}) {
        return await this.find(comment_id)
    }

    /**
     * Returns a list of Comments matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all Comments if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()

        var page = null;
        var pageCount = null;
        if (fields.page != null && !isNaN(fields.page)) {
            page = parseInt(fields.page);
            pageCount = parseInt(fields.pageCount);

            delete fields.page;
            delete fields.pageCount;
        }

        // Find matching Comments
        return this.findByFields({
            fields,
            page:page,
            pageCount:pageCount
        })
    }

    /**
     * Creates a new Comment
     */
    static async createEntry(_, {post_id, contents, writer}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    post_id,
                    contents,
                    writer,
                    created_at: new Date()
                }
            })

            return this.getByID(_, {comment_id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a comment 
     */
    static async updateEntry(_, {comment_id, contents}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id: comment_id,
                data: {
                    contents
                }
            })

            return this.getByID(_, {comment_id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Returns a Comment by its ID
     */
    static async removeEntry(_, {comment_id}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            await this.delete(connection, {
                id: comment_id
            });
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Comment