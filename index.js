
// In Server Side we will be using commonJS modules because right now NodeJS has good support for it...In Frontend we will use React and we get much easier access to ES6 modules and can use the "import" syntax...
const express = require('express');

// First React Application; most of applications will use only 1 "app" object.
// All app handlers will be associated to this "app" object.
const app = express();

// associate with route handler
// This is the first taste of our route handler with express
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

