import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

import api from './routes/api'

app.use('/api', api)

export default app