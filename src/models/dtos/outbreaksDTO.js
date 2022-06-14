class OutbreaksDTO {
    constructor(virusCode, geoCode, detDate, endDate) {
        this.virusCode = virusCode;
        this.geoCode = geoCode;
        this.detDate = detDate;
        this.endDate = endDate;
    }
}

module.exports = OutbreaksDTO;
