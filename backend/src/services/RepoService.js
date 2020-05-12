const puppetter = require('puppeteer');
const githubUrl = 'https://github.com/login';


exports.scrappeSite = async (data) => {
    const {
        username,
        password,
        repositoryName,
        description
    } = data;

    const browser = await puppetter.launch({
        headless: false,
        defaultViewport: {
            height: 1000,
            width: 1000
        }
    });

    const page = await browser.newPage();
    await page.goto(githubUrl);


    const MakeLogin = async (username, password) => {
        await page.type('[name=login]', username);
        await page.type('[name=password]', password);
        await page.click('[name=commit]');
    };

    const CreateRepository = async (repositoryName, description) => {
        await page.click('[class="btn btn-sm btn-primary text-white"]');
        await page.waitFor(3000);
        await page.type('[class="form-control js-repo-name js-repo-name-auto-check short"]', repositoryName);
        await page.type('[class="form-control long"]', description);
        await page.waitFor(2000);
        await page.click('[class="btn btn-primary first-in-line"');
    };

    const GetCloneUrl = async () => {
        await page.waitFor(3000);
        const textValue = await page.evaluate(() => {
            return document.querySelector("#empty-setup-clone-url").value;
        });
        return textValue;
    };

    await MakeLogin(username, password);
    await CreateRepository(repositoryName, description);

    const cloneUrl = await GetCloneUrl();

    return cloneUrl;
};


