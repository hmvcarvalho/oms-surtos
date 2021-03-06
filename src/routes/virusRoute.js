const { Router } = require('express');
const virusModel = require('../models/virus');
const outbreaksModel = require('../models/outbreaks');
const { checkSchema } = require('express-validator');
const { virusValidationSchema } = require('../validators/virusValidator');
const outbreakVirusDTO = require('../models/dtos/outbreaks/outbreakVirusDTO');

const validationErrorsMiddleware = require('../middlewares/validationErrorsMiddleware');

const virusRouter = Router();

// criar DTO depois de a BD estar funcional

// virusRouter.post('/', (req, res) => {

//     virusModel.create({...req.body})
//         .then(() => {
//             res.json({ msg: 'Virus was inserted with success' });
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         })
// });

virusRouter.post('/', checkSchema(virusValidationSchema), validationErrorsMiddleware, (req, res) => {
    virusModel
        .create({ ...req.body })
        .then(() => {
            res.status(201).json({ msg: 'Virus was inserted with success' });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// get all the outbreak's of a virus
// DTO
virusRouter.get('/:id/outbreaks', (req, res) => {
    outbreaksModel
        .find({ virusCode: req.params.id })
        .then((outbreakList) => {
            const outbreakVirusListDTO = outbreakList.map((outbreakVirus) => {
                return new outbreakVirusDTO(outbreakVirus);
            });
            res.status(200).json(outbreakVirusListDTO);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// outbreak.virusCode, outbreak.geoCode, outbreak.detDate, outbreak.endDate

// virusRouter.get('/:id/outbreaks', (req, res) => {
//     outbreaksModel
//         .find({ virusCode: req.params.id })
//         .then((listaSurtos) => {
//             res.json(listaSurtos);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

module.exports = virusRouter;
