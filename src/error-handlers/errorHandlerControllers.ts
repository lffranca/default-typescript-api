import { ErrorHttp } from './ErrorHttp'

export const errorHandlerController = (error: Error | ErrorHttp, res) => {
    console.error(error.stack)
    
    if(error instanceof ErrorHttp) {
        console.log('ErrorHttp')
        return res.status(error.statusCode).json(error.message)
    } else if(error instanceof Error) {
        console.log('Error')
        return res.status(500).json(error.message)
    } else
        return res.status(500).json(error)
}