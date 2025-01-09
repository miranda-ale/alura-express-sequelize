class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res){
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).send({ listaDeRegistro })
        } catch (error) {
            
        }
    }
}

module.exports = Controller;
