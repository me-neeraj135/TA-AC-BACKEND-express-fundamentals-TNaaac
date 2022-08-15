/** @format */

let express = require(`express`);

const { application } = require("express");
let date = new Date();
let app = express();

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

app.get(`/`, (req, res) => {
  // res.setHeader(`Content-Type`, `text/html`);
  res.sendFile(__dirname + `/index.html`);
});

app.use((req, res, next) => {
  // console.log(req.url);

  if (req.url.split(`.`).pop() === `css`) {
    res.setHeader(`Content-Type`, `text/css`);
    res.send(__dirname + req.url);
  } else if (req.url.split(`.`).pop() === `jpg`) {
    res.setHeader(`Content-Type`, `image/jpg`);
    res.send(__dirname + req.url);
  }
  next();
});

app.listen(5000, () => {
  console.log(`server listening on port 5k`);
});
