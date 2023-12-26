const {monthlyCo2Emission, customerMonthlyConsumption} = require("../OpenVolt/service");


/**
 * insert object value into users
 * returns a row
 * @param req
 * @param res
 */
const energyConsumptionPerBuildingPerMonth = async (req, res) => {
    console.log(req.params)
    const { meterId, granularity } =  req.params
    customerMonthlyConsumption(meterId, granularity)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
};

/**
 * insert object value into users
 * returns a row
 * @param req
 * @param res
 */
const carbonEmission = async (req, res) => {
    console.log(req.params)
    const { meterId } =  req.params
    monthlyCo2Emission(meterId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
};


module.exports = {
    energyConsumptionPerBuildingPerMonth,
    carbonEmission
}
