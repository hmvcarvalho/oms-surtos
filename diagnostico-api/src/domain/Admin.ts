import { User } from './User';
import IAdminDTO from '../dtos/IAdminDTO';

export class Admin extends User {
    // public funcNum : string;
    // public department : string;

    // constructor(adminDto : IAdminDTO){
    //     super(adminDto)
    //     if(adminDto.funcNum && adminDto.department){
    //         this.funcNum = adminDto.funcNum,
    //         this.department = adminDto.department;
    //     }else{
    //         throw new Error("Admin fields can't be null")
    //     }
    // }

    // public static createAdmin(adminDto : IAdminDTO) : Admin {
    //     return new Admin(adminDto)
    // }

    public funcNum: string;
    public department: string;

    private constructor(adminDto: IAdminDTO) {
        super(adminDto);
        this.funcNum = adminDto.funcNum;    
        this.department = adminDto.department;
    }

    public static createAdmin(adminDto: IAdminDTO) {
        if (adminDto.funcNum && adminDto.department) {
            return new Admin(adminDto);
        } else {
            throw new Error("ADMIN fields can't be null");
        }
    }
}
