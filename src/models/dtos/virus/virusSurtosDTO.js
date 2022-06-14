class virusSurtosDTO {

    constructor(code, name, geo, detDate, endDate){

        this.virus_code = code;
        this.virus_nome = name;
        this.virus_geoCode = geo;
        this.virus_detDate = detDate;
        this.virus_endDate = endDate;


    }
}

module.exports = virusSurtosDTO;