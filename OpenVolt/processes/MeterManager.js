const fetchLib = require("node-fetch");
const OpenVaultDataManager = require("./OpenVaultDataManager");

class MeterManager extends OpenVaultDataManager {
     async getMeters () {
        const { LIST_METER } = this.URL
        this.options.method = 'GET'
        try {
            const response = await fetchLib(LIST_METER, this.options);
            return await response.json();
        }catch (err){
           console.error('Error fetching meter data: ', err)
        }
    };

}

module.exports = MeterManager
