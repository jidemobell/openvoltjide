const CONSTANTS = require("../lib/apiconstants")


/**
 * @constructor
 */
class OpenVoltRoutesManager {
    constructor(api_key, meter_id) {
        this.api_key = api_key;
        this.meter_id = meter_id;
        this.URL = CONSTANTS;
        this.options = {
            headers: {
                'content-type': 'application/json',
                'x-api-key': this.api_key
            },
        };
    }
}

module.exports = OpenVoltRoutesManager;
