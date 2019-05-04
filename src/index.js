import http from 'http';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import RESTfulAPI from './RESTfulAPI';
import graphQL from './graphQL';
import config from './config.json';
import version from '../package.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// internal middleware
app.use(middleware({ config }));

// api router
app.get('/', (req, res) => { res.json(version); });
app.use('/api', RESTfulAPI({ config }));
app.use('/graphql', graphQL({ config }));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;