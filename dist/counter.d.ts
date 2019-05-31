/**
 * count one by one ascending
 */
export declare class Counter {
    /**
     * @ignore
     */
    limit: number;
    /**
     * @ignore
     */
    constructor(limit?: number);
    /**
     * Count of 0 up to the established limit
     * @param intervalTime the number of miliseconds of the ticks.
     */
    start(intervalTime?: number): import("../../../../../../../../Users/mavl/Mavl/npm-CI-test/npm-project-course/ts/chronometer-mavl/node_modules/rxjs/internal/Observable").Observable<string>;
}
