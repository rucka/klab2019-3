import * as express from 'express'
import * as cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (_, res) => {
  res.end('Klab community 2019 #3 - Typescript in salsa funzionale')
})
app.listen(3333)
console.log('server listening to port 3333')
