// server.js
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const path = require('path')

const app = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'data/db.json'))
const middlewares = jsonServer.defaults()

app.db = router.db

app.use(middlewares)
app.use(auth)
app.use(router)

app.listen(8000, () => {
  console.log('JSON Server is running on port 8000')
})
