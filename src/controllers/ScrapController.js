const ScrapService = require('../services/ScrapService');

module.exports = {

    async scrap(request, response) {
        const data = request.body;

        const content = await ScrapService.scrappeSite(data);

        response.json({ data: content })
    }
}