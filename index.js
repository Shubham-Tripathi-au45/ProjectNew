const express = require('express');
const app = express();
const port = 80;

app.get('/sayHello', (req, res) => {
    const jsonResponse = { message: 'Hello User' };
    res.json(jsonResponse);
});
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});