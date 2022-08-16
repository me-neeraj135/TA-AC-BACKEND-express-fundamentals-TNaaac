/** @format */

let express = require(`express`);

// const { application } = require("express");
let date = new Date();
let app = express();
let publicPath = __dirname + `/public/`;
let mediaPath = publicPath + `media/`;
console.log(mediaPath);

function logger(req, res, next) {
  console.log(req.method, req.url, date.toLocaleTimeString());
  next();
}

app.use(`/`, logger);

app.use((req, res, next) => {
  let store = ``;
  req.on(`data`, chunk => {
    store += chunk;
  });
  req.on(`end`, () => {
    req.body = store;
    console.log(req.body);
  });
  next();
});

// custom middleware for css and media files

app.use((req, res, next) => {
  if (req.url.split(`.`).pop() === `css`) {
    res.sendFile(publicPath + req.url);
  } else if (req.url.split(`.`).pop() === `jpg`) {
    res.sendFile(mediaPath + req.url);
  } else {
    next();
  }
});

app.get(`/`, (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

app.listen(5000, () => {
  console.log(`server listening on port 5k`);
});
