"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var myvar = "toto";
app.get('/', function (req, res) {
    res.send('Hello World!');
});
if (myvar == "5") {
    console.log("5");
}
if (myvar == "5") {
    console.log("7");
}
app.listen(3000, function () {
    console.log('Example app listening on port 3000!' + ' q');
});
/*
class Startup {
    public static main(): number {
        console.log('Hello World 25');
        return 0;
    }
}

Startup.main();

var michel = new Duke();

michel.add (1508800);

michel.show();
*/
//# sourceMappingURL=app.js.map