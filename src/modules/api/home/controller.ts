import { verifyData } from './services/index'
import { errorHandlerController } from '../../../error-handlers/errorHandlerControllers'

export const index = (req, res) => Promise.resolve("TEST DEV")
.then(verifyData)
.then(result => res.status(200).json(result))
.catch(error => errorHandlerController(error, res))