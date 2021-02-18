export default {
  async registerEnterprise(context, data) {
    const userId = context.rootGetters.userId;
    const enterpriseData = {
      name: data.name,
      address: data.address,
      pricePerLoad: data.price,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://chalan-management-default-rtdb.europe-west1.firebasedatabase.app/enterprises/${userId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(enterpriseData),
      }
    );

    // const responseData = await response.json()

    if (!response.ok) {
      // error......
    }

    context.commit("registerEnterprise", {
      ...enterpriseData,
      id: userId,
    });
  },
  async loadEnterprises(context) {
    const response = await fetch(
      `https://chalan-management-default-rtdb.europe-west1.firebasedatabase.app/enterprises/.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const enterprises = [];

    for (const key in responseData) {
      const enterprise = {
        id: key,
        name: responseData[key].name,
        address: responseData[key].address,
        pricePerLoad: responseData[key].pricePerLoad,
      };
      enterprises.push(enterprise);
    }
    context.commit("setEnterprises", enterprises);
  },
};
