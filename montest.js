"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duke = /** @class */ (function () {
    function Duke() {
        this.nuke = 0;
    }
    Duke.prototype.add = function (par1) {
        this.nuke += par1;
    };
    Duke.prototype.show = function () {
        console.log(this.nuke.toString() + "----");
    };
    return Duke;
}());
exports.Duke = Duke;
//# sourceMappingURL=montest.js.map