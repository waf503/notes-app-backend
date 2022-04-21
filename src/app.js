const {app} = require('./bin/routes');

app.listen(3000, () => {
    console.log('server on port 3000 conected');
})