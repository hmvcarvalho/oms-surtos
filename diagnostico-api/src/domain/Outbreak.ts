import IOutbreakDTO from '../dtos/IOutbreakDTO';
import { IOutbreakPersistence } from '../dataSchema/IOutbreakPersistence';

export class Outbreak {
    endDate?: Date;

    private constructor(public virusCode: string, public geoZoneCode: string, public detDate: Date, endDate?: Date) {
        if (endDate) {
            this.endDate = endDate;
        }
    }

    public static create(outbreakDTO: IOutbreakDTO | IOutbreakPersistence): Outbreak {
        if (outbreakDTO.virusCode && outbreakDTO.geoZoneCode && outbreakDTO.detDate) {
            return outbreakDTO.geoZoneCode
                ? new Outbreak(outbreakDTO.virusCode, outbreakDTO.geoZoneCode, outbreakDTO.detDate, outbreakDTO.endDate)
                : new Outbreak(outbreakDTO.virusCode, outbreakDTO.geoZoneCode, outbreakDTO.detDate);
        } else {
            throw new Error("Outbreak fields can't be null");
        }
    }
}
