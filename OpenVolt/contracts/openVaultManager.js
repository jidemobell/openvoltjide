const MeterManager= require("../processes/MeterManager");
const IntervalDataManager = require("../processes/IntervalDataManager");

/**
 *
 * @returns {{MeterManager: MeterManager|{}, IntervalDataManager: IntervalDataManager|{}}}
 * @constructor
 */
function OpenVaultAPIManager() {
    return {
        MeterManager,
        IntervalDataManager
    }
}

module.exports = {OpenVaultAPIManager};
