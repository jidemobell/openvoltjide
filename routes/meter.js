const express = require('express');
const router = express.Router();

const Consumers = require('../controller/openvolt');

/* GET Garment colours */
router.get('/energy/:meterId/:granularity', async (req, res, next) => {
    await Consumers.energyConsumptionPerBuildingPerMonth(req, res);
});


router.get('/carbon/:meterId', async (req, res, next) => {
    await Consumers.carbonEmission(req, res);
});


module.exports = router;
