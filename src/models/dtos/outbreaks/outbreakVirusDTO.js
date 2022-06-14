class outbreakVirusDTO {
    constructor({ virusCode, geoCode, detDate, endDate }) {
        this.virusCode = virusCode;
        // this.virus_name = name;
        this.virus_geoCode = geoCode;
        this.virus_detDate = detDate;
        this.virus_endDate = endDate;
    }
}

module.exports = outbreakVirusDTO;
