var Jasmine = require('jasmine');

let jasmine = new Jasmine();
// modify this line to point to your jasmine.json
jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.execute();