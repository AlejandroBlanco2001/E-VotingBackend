const pg = require('pg')

var conString = "postgres://jcungtvg:4uh0tz70tkCmbhS77v1_44c5p6zRb6i-@kesavan.db.elephantsql.com/jcungtvg";
var client = new pg.Client(conString);
client.connect();

module.exports = client;