// app.js
require('./hello.js');

require('./foo.js');
foo();

var bar = require('./bar.js');
bar();

var fiz = require('./fiz.js').fiz;
fiz();

var buz = require('./buz.js');
buz.log();

var baz = require('./baz.js').Baz;
baz.log();

var Doo = require('./doo.js');
var doo = new Doo();
doo.log();

var Qux = require('./qux.js').Qux;
var qux = new Qux();
qux.log();
