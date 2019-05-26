"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
/**
 * count downwards
 */
class Discounter {
    /**
     * @ignore
     */
    constructor(limit = 5) {
        /**
         * @ignore
         */
        this.initValue = -1;
        this.initValue = limit;
    }
    /**
     * Is discounting from the initial value entered up to 0
     */
    start() {
        return interval_1.interval(1000).pipe(map_1.map((sc) => {
            return conversion_1.convertSecondToDiplay(this.initValue - sc, 2, this.initValue);
        }));
    }
}
exports.Discounter = Discounter;
