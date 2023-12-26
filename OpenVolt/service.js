const { OpenVaultAPIManager } = require("./contracts/openVaultManager");
const { IntervalDataManager} = OpenVaultAPIManager();
const retryFetch = require("node-fetch-retry")

async function customerMonthlyConsumption (meterId, granularity) {
    // I hardcoded the start and end date assuming only January 2023
    let startDate = '2023-01-01', endDate = '2023-01-31',
        queryParams =
    '&start_date=' + startDate
    + '&end_date=' + endDate
    + '&granularity=' + granularity


    const intervalDataManager = new IntervalDataManager(process.env.OPENVAULT_API_KEY, meterId);
    return await intervalDataManager.getIntervalData (queryParams)
}



async function monthlyCo2Emission (meterId) {
    try {
        const headers = { 'Accept':'application/json'};
        const url = (from) => `https://api.carbonintensity.org.uk/intensity/${from}`
        let energyData = await customerMonthlyConsumption(meterId, 'hh'), result =0;

        if(energyData) {
            const {data} = energyData
            await Promise.all( data.map( async (datum) => {
                const {start_interval, consumption} = datum
                const response = await retryFetch(url(start_interval), {method: 'GET', headers, retry: 10, pause: 1000})

                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }

                const intensityResponse = await response.json()
                const {data} =  await intensityResponse
                const {intensity} = data[0]
                result += (intensity.actual * consumption)

            }))
        }
        return result/1000
    }catch (err){
        console.error('Error fetching meter data: ', err)
    }
}

async function fuelMixWeightedAverage(){
    /**
     *  The Carbon Intensity API has a 'beta' section called Generation Mix
     *  though this section does not have a route for hourly readings ( I may be wrong )
     *
     *  I also wasn't sure how the weights are distributed, I check a couple of electricity data
     *  to have more understanding in this.
     */
}

module.exports = {
    customerMonthlyConsumption,
    monthlyCo2Emission
}
