import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Reescribir rutas para manejar paginación.
server.use(middlewares);
server.use(jsonServer.rewriter({
  "/recipes?_page=:page&_limit=:limit": "/recipes"
}));

server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
