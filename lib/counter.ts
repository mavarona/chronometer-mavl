import {interval} from 'rxjs/internal/observable/interval';
import {map} from 'rxjs/internal/operators/map';
import { convertSecondToDiplay } from './conversion';

/**
 * count one by one ascending
 */
export class Counter {
    /**
     * @ignore
     */
    limit = -1;
    /**
     * @ignore
     */
    constructor(limit: number = 5){
        this.limit = limit;
    }
    /**
     * Count of 0 up to the established limit
     */
    start(){
        return interval(1000).pipe(
            map(
                (sc: number) => {
                        return convertSecondToDiplay(sc, 1, this.limit);
                }
            )
        );
    }
}