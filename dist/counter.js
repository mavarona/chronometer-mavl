"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
const constants_1 = require("./constants");
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
     * @param intervalTime the number of miliseconds of the ticks.
     */
    start(intervalTime = constants_1.Chrono.SC_IN_MS) {
        return interval_1.interval(intervalTime).pipe(map_1.map((sc) => {
            return conversion_1.convertSecondToDiplay(sc, 1, this.limit);
        }));
    }
}
exports.Counter = Counter;
