export interface Request {
    body: {
        CEP: string;
        fullname: string;
        email: string;
        phone: string;
        CNPJ: string;
    };
    params: {
        id: string;
    };
}

export interface Response {
    status(code: number): Response;
    json(data?: any): void;
}