const express = require('express')
const app = express()
const port = 2000
require('dotenv').config()
const { body, validationResult } = require('express-validator');
const { validateRequiredFields, validateRequiredArrays } = require('./sharedModules/validator');
const utils = require('./sharedModules/queries');
const Utility = new utils();
const npm_package = require('@joseneoito/test-npm');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/comments', validateRequiredFields(['body', 'news_uid']), async (req, res, next) => {
    try {
        const errors = validationResult(req);
        let res = await Utility.getUserByUsername('jose2007kj');
        console.log("User by Username", res, npm_package)
        res = null;
        res = await npm_package.Utility.getUserByUsername('jose2007kj');
        console.log("User by Username from npm package", res)
        if (!errors.isEmpty()) {
            throw errors.array();
        }
        res.send('POST request to homepage')
    } catch (error) {
        console.log("error",error)
        res.send('Error')
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
