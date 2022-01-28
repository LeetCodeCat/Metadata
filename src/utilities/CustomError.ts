export class CustomError extends Error {
    private statusCode: number;

    constructor(message: string, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
