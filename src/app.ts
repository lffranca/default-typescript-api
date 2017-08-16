import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'
import * as cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

import api from './routes/api'

app.use('/api', api)

export default app