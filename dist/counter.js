"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
/**
 * count one by one ascending
 */
class Counter {
    /**
     * @ignore
     */
    constructor(limit = 5) {
        /**
         * @ignore
         */
        this.limit = -1;
        this.limit = limit;
    }
    /**
     * Count of 0 up to the established limit
     */
    start() {
        return interval_1.interval(1000).pipe(map_1.map((sc) => {
            return conversion_1.convertSecondToDiplay(sc, 1, this.limit);
        }));
    }
}
exports.Counter = Counter;
