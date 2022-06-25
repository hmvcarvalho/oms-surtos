import { IVirusPersistence } from '../dataSchema/IVirusPresistence';
import { IVirusDTO } from '../dtos/IVirusDTO';
import { Virus } from '../domain/Virus';

export class VirusMapper {
    public static toDto(x: Virus): IVirusDTO {
        return {
            virusCode: x.virusCode,
            virusName: x.virusName,
        } as IVirusDTO;
    }

    public static toPersistence(x: Virus): any {
        return {
            virusCode: x.virusCode,
            virusName: x.virusName,
        } as IVirusPersistence;
    }

    public static toDomain(x: IVirusDTO | IVirusPersistence): Virus {
        return Virus.create(x);
    }
}
