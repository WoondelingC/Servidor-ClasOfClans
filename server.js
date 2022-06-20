const clashApi = require('clash-of-clans-api')

let client = clashApi({
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIzNDk4YWNkLTgyZjYtNDNkOS04MmNlLTNhZGVjNGRhMGE4YyIsImlhdCI6MTY1NTY3OTQ2OCwic3ViIjoiZGV2ZWxvcGVyL2M4NjdjNjM5LWJiMzMtNTY3My0zOWJlLTY4NmU5OWYzNTM0NiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4zMC4zNy4xNDEiLCIyMDEuMjQ0LjE2Ni43Il0sInR5cGUiOiJjbGllbnQifV19.VAtsFpTQWHz6v_-5rEjX7ms-dta6EF3pIh_FeseNiPIFJsmxEePkxWzryBJPsXLQl7IbXIpyZiHKItWCUUVw0Q'
});


const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8080, () => {
 console.log("El servidor está inicializado en el puerto 8080");
});

app.get('/hola', function (req, res) {
  client
   .clans()
   .withWarFrequency('always')
   .withMinMembers(25)
   .withLimit(24)
   .fetch()
   .then(response => res.send(response))
   .catch(err => res.send('Error'));
});