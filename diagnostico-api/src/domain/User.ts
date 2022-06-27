import IUserDTO from '../dtos/IUserDTO';

export abstract class User {
    public username: string;
    public password: string;
    public email: string;
    public phone: string;
    public address: string;
    public city: string;
    public dateOfBirth: Date;

    constructor(user: IUserDTO) {
        if (
            user.username &&
            user.password &&
            user.email &&
            user.phone &&
            user.address &&
            user.city &&
            user.dateOfBirth
        ) {
            this.username = user.username;
            this.password = user.password;
            this.email = user.email;
            this.phone = user.phone;
            this.address = user.address;
            this.city = user.city;
            this.dateOfBirth = user.dateOfBirth;
        } else {
            throw new Error("User fields can't be null");
        }
    }
}
