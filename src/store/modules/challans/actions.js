export default {
    async makeChallan (context, payload) {
        const newChallan = {
            id: new Date().toISOString(),
            plantName: payload.plantName,
            plateNumber: payload.plateNumber,
            trips: payload.trips,
            date: payload.date
        }
        const response = await fetch(`https://chalan-management-default-rtdb.europe-west1.firebasedatabase.app/challans/${payload.enterpriseId}.json`, {
            method: 'POST',
            body: JSON.stringify(newChallan)
        })

        const responseData = await response.json()

        if (!response.ok) {
            //const error = new Error(responseData.message || 'Failed to send request.')
        }

        newChallan.id = responseData.name
        newChallan.enterpriseId = payload.enterpriseId

        context.commit('addChallan', newChallan)
    },
    async fetchChallans(context) {
        const enterpriseId = context.rootGetters.userId
        const response = await fetch(`https://chalan-management-default-rtdb.europe-west1.firebasedatabase.app/challans/${enterpriseId}.json`)
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.')
            throw error
        }

        const challans = []

        for (const key in responseData) {
            const challan = {
                id: key,
                enterpriseId: enterpriseId,
                plantName: responseData[key].plantName,
                plateNumber: responseData[key].plateNumber,
                trips: responseData[key].trips,
                date: responseData[key].date
            }
            challans.push(challan)
        }
        context.commit('setChallans', challans)
    }
}