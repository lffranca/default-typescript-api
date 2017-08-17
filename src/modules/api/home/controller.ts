import { verifyData } from './services/index'

export const index = (req, res) => Promise.resolve("TEST DEV")
.then(verifyData)
.then(result => res.status(200).json(result))
.catch(error => res.status(500).json(error))