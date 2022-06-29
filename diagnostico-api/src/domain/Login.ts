import ILoginDTO from '../dtos/ILoginDTO';

class Login {
    public password: string;
    public email: string;

    constructor(login: ILoginDTO) {
        if (login.email && login.password) {
            this.email = login.email;
            this.password = login.password;
        } else {
            throw new Error("Login fields can't be null");
        }
    }
}

export { Login };
