const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.get(`/api/orders`, (req,res_) => {

})

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
  res.send(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
  });