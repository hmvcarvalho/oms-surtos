import { IOutbreakPersistence } from '../dataSchema/IOutbreakPersistence';
import IOutbreakDTO from '../dtos/IOutbreakDTO';
import { Outbreak } from '../domain/Outbreak';

export class OutbreakMapper {
    public static toDTO(outbreak: Outbreak): IOutbreakDTO {
        return {
            detDate: outbreak.detDate,
            endDate: outbreak.endDate,
            virusCode: outbreak.virusCode,
            geoZoneCode: outbreak.geoZoneCode,
        } as IOutbreakDTO;
    }

    public static toDomain(outbreak: IOutbreakDTO | IOutbreakPersistence): Outbreak {
        return Outbreak.create(outbreak);
    }
}
