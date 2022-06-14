class outbreakVirusDTO {
    constructor({ code, name, geo, detDate, endDate }) {
        this.virusCode = code;
        this.virus_name = name;
        this.virus_geoCode = geo;
        this.virus_detDate = detDate;
        this.virus_endDate = endDate;
    }
}

module.exports = outbreakVirusDTO;
