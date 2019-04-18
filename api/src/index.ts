import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (_, res) => {
  res.end('hello from klab!')
})
app.listen(3333)
console.log('server listening to port 3333')
