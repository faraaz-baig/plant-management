import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            enterprises: [
                {
                    id: 'c1',
                    name: 'Sonal Enterprises',
                    address: '#13 kanpur 5343434',
                    pricePerLoad: 30  
                },
                {
                    id: 'c2',
                    name: 'Sonal Enterprises',
                    address: '#1 kanpura ram nagar 53444',
                    pricePerLoad: 70  
                },
                {
                    id: 'c3',
                    name: 'Sonal Enterprises',
                    address: '#10 trinpur illiyas nagar 5343434',
                    pricePerLoad: 40  
                },
                {
                    id: 'c4',
                    name: 'Sonal Enterprises',
                    address: '#25 kanpur minhaj nagar 5343434',
                    pricePerLoad: 80  
                  }
            ]
        }
    },
    mutations,
    actions,
    getters
}