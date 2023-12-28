const {monthlyCo2Emission, customerMonthlyConsumption} = require("../OpenVolt/services");


/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const energyConsumptionPerBuildingPerMonth = async (req, res) => {
    const { meterId, granularity } =  req.params
    customerMonthlyConsumption(meterId, granularity)
        .then(doc => {
            const {data} = doc
            const { consumption } = data[0]
            res.status(200).json( consumption)
        })
        .catch(err => res.status(500).json(err))
};


/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const carbonEmission = async (req, res) => {
    const { meterId } =  req.params
    monthlyCo2Emission(meterId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
};


module.exports = {
    energyConsumptionPerBuildingPerMonth,
    carbonEmission
}
