const express = require('express')
const app = express()
const port = 2000
const { body, validationResult } = require('express-validator');
const { validateRequiredFields, validateRequiredArrays } = require('./sharedModules/validator');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/comments', validateRequiredFields(['body', 'news_uid']), async (req, res, next) => {
    try {
        const errors = validationResult(req);
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
