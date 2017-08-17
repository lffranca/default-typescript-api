export class ErrorHttp extends Error {
    public statusCode: number

    constructor(message, code = 400) {
        super(message)
        this.name = "ErrorHttp"
        this.statusCode = code
    }
}