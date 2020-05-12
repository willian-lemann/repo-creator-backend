const ScrapService = require('../services/RepoService');

module.exports = {

    async scrap(request, response) {
        if (data == null)
            response.json({ data: 'Preencha os dados no form' });
            
        const data = request.body;

        const content = await ScrapService.scrappeSite(data);

        response.json({ data: content })
    }
}