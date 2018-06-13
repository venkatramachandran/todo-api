const restify = require('restify');
const handler = require('./handler');
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer();
server.pre(restify.pre.userAgentConnection());
server.pre(restify.pre.dedupeSlashes());
server.use(restify.plugins.bodyParser({
    maxBodySize: 0,
    mapParams: true,
    mapFiles: false,
    overrideParams: false
}));
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.acceptParser(server.acceptable));

const cors = corsMiddleware({
    origins: ['*'],
});
server.pre(cors.preflight);
server.use(cors.actual);

handler(server);

module.exports = {
    server
};
