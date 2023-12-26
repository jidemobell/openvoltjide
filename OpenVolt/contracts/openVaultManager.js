const MeterManager= require("../processes/MeterManager");
const IntervalDataManager = require("../processes/IntervalDataManager");

function OpenVaultAPIManager() {
    return {
        MeterManager,
        IntervalDataManager
    }
}

module.exports = {OpenVaultAPIManager};
