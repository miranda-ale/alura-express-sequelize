const datasource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return await datasource[this.model].findAll();
    }

}

module.exports = Services;
