import { IVirusDTO } from '../dtos/IVirusDTO';
import { IVirusPersistence } from '../dataSchema/IVirusPresistence';

export class Virus {
    virusCode: string;
    virusName: string;

    constructor(virusCode: string, virusName: string) {
        this.virusCode = virusCode;
        this.virusName = virusName;
    }

    public static create(virus: IVirusDTO | IVirusPersistence): Virus {
        if (virus.virusCode && virus.virusName) {
            return new Virus(virus.virusCode, virus.virusName);
        } else {
            throw new Error("Virus fields can't be empty");
        }
    }
}
