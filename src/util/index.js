const { apiViaCep } = require('../services/ApiViaCep')


class Util {


    static async getCep(cep) {

        const { data } = await apiViaCep.get(`${cep}/json/`)

        if (!data || data.erro) {
            return false
        } else {
            return data
        }
    }





}


module.exports = { Util }