const express = require('express');
const OutbreaksDTO = require('../models/dtos/outbreaksDTO');

const outbreaksModel = require('../models/outbreaks');
const router = express.Router();

// add outbreak
router.post('/', function (req, res) {
    const newOutbreak = new outbreaksModel();

    newOutbreak.virusCode = req.body.virusCode;
    newOutbreak.geoCode = req.body.geoCode;
    newOutbreak.detDate = req.body.detDate;
    newOutbreak.endDate = req.body.endDate;
    console.log(newOutbreak);
    newOutbreak.save(function (err) {
        if (err) res.send(err);
        res.json({ message: 'Outbreak added.' });
    });
});

// list all outbreaks
router.get('/', function (req, res) {
    outbreaksModel.find({}, function (err, existingOutbreaks) {
        if (err) return res.send(err);
        const existingOutbreaksDTO = existingOutbreaks.map(
            (outbreak) => new OutbreaksDTO(outbreak.virusCode, outbreak.geoCode, outbreak.detDate, outbreak.endDate)
        );
        res.json(existingOutbreaksDTO);
    });
});

// list outbreak
router.get('/:id', function (req, res, next) {
    outbreaksModel.findById(req.params.id, function (err, theOutbreak) {
        if (err) return res.send(err);
        const { virusCode, geoCode, detDate, endDate } = theOutbreak; // object destructory
        const m = new OutbreakDTO(virusCode, geoCode, detDate, endDate);
        res.json(theOutbreak);
    });
});

// list outbreaks related to specified virus
router.get('/virus/:id', function (req, res, next) {
    outbreaksModel.findById(req.params.id, function (err, theOutbreak) {
        if (err) return res.send(err);
    });
});

// edit an outbreak's period end date
router.put('/:geoCode/:virusCode', function (req, res) {
    outbreaksModel.findOneAndUpdate(
        { geoCode: req.params.geoCode, virusCode: req.params.virusCode },

        { endDate: req.body.endDate },

        function (err, theOutbreak) {
            if (err) res.send(err);

            res.json({ mensagem: 'Outbreak successfully updated.' });
        }
    );
});

module.exports = router;
