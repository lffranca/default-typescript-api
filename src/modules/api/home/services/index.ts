import { ErrorHttp } from './../../../../error-handlers/ErrorHttp';
export const verifyData = (data) => {
    throw new ErrorHttp("Erro de solicitação", 400)
}