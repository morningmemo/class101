import { Router } from 'express';
import posts from './posts';
import comments from './comments';
import users from './users';

export default ({ config }) => {
	let api = Router();

	api.put('/comments/:id', (req, res) => comments.update( req.params.id, req.body, res));
	api.delete('/comments/:id', (req, res) => comments.delete( req.params.id, res));
	api.post('/posts/:id/comments', (req, res) => comments.create( req.params.id, req.body, res));
	api.get('/comments/:id', (req, res) => comments.read( req.params.id, res));
	api.get('/comments', (req, res) => comments.list( res));
	api.get('/users/:id/comments', (req, res) => comments.getByUser( req.params.id, res));
	api.get('/posts/:id/comments', (req, res) => comments.getByPost( req.params.id, req.query, res));

	api.put('/posts/:id', (req, res) => posts.update( req.params.id, req.body, res));
	api.delete('/posts/:id', (req, res) => posts.delete( req.params.id, res));
	api.post('/posts', (req, res) => posts.create( req.body, res));
	api.get('/posts/:id', (req, res) => posts.read( req.params.id, res));
	api.get('/posts', (req, res) => posts.list( res));
	api.get('/users/:id/posts', (req, res) => posts.getByUser( req.params.id, res));

	api.post('/users', (req, res) => users.create( req.body, res));
	api.get('/users/:id', (req, res) => users.read( req.params.id, res));
	api.get('/users', (req, res) => users.list( res));

	return api;
}
