const fetchLib = require("node-fetch");
const OpenVaultDataManager = require("./OpenVaultDataManager");


/**
 * @constructor
 */
class IntervalDataManager  extends  OpenVaultDataManager {
    async getIntervalData(other_query_params) {
        const { GET_INTERVAL_DATA } = this.URL

        this.options.method = 'GET';
        let url =  GET_INTERVAL_DATA + '?' + '&meter_id=' + this.meter_id

        try {
            const response = await fetchLib(url.concat(other_query_params), this.options);
            return await response.json();
        }catch (err){
            console.error('Error fetching meter data: ', err)
        }
    }

}

module.exports = IntervalDataManager
