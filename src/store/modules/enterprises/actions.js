export default {
    registerEnterprise(context, data) {
        const enterpriseData = {
            id: context.rootGetters.userId,
            name: data.name,
            address: data.address,
            pricePerLoad: data.price
        };

        context.commit('registerEnterprise', enterpriseData);
    }
}