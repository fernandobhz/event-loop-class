const express = require('express');

const app = express();


app.get('/banana', (req, res) => {
    res.send('banana');
})

app.get('/orange', (req, res) => {
    res.send('orange');
})

app.get('/long-task', (req, res) => {
    
    console.time('long-task')

    for (let i = 0; i < 100_000_000_000; i++) {  

    }

    console.timeEnd('long-task')

    res.send('long-task');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})


/**
 * References: 
 *   https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1812s
 *   https://www.youtube.com/watch?v=8aGhZQkoFbQ
 *   
 *  Legendas em portugues
 */