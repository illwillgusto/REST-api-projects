const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// simple GET route, routes are URLs that clients can access to perform certain actions 
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Will Walton' },
        { id: 2, name: 'Ray Walton' }
    ];

    res.json(users);
})