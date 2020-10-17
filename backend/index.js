var express = require('express'),
    app = express(),
    port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello from the backend API server!')
})

app.listen(port, () => {
    console.log('API server started on: ' + port);
});
