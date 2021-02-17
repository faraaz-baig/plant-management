export default {
    makeChallan (context, payload) {
        const newChallan ={
            id: new Date().toISOString(),
            enterpriseId: payload.enterpriseId,
            plantName: payload.plantName,
            plateNumber: payload.plateNumber,
            trips: payload.trips,
            date: payload.date
        }
        context.commit('addChallan', newChallan)
    }
}