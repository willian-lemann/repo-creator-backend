const ScrapService = require('../services/RepoService');

module.exports = {

    async scrap(request, response) {
        const { password, repositoryName } = request.body;
        if (password === '' || repositoryName === '')
            response.json({ data: 'Preencha os dados no form' });

        const data = request.body;

        const content = await ScrapService.scrappeSite(data);

        response.json({ data: content })
    }
}