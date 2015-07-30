var express = require('express');
var serve = express();
serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 3333));
serve.listen(serve.get('port'), function () {
  console.log('Node app of Mi24-AngMD-App is running at localhost:' + serve.get('port'));
});
