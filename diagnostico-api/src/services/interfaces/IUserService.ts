import ILoginDTO from '../../dtos/ILoginDTO';

export default interface IUserService {
    login: (loginDto: ILoginDTO) => Promise<string>;
}
