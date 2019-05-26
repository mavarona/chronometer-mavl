import {interval} from 'rxjs/internal/observable/interval';
import {map} from 'rxjs/internal/operators/map';
import { convertSecondToDiplay } from './conversion';

/**
 * count downwards
 */
export class Discounter {
    /**
     * @ignore
     */
    initValue = -1;
    /**
     * @ignore
     */
    constructor(limit: number = 5){
        this.initValue = limit;
    }
    /**
     * Is discounting from the initial value entered up to 0
     */
    start(){
        return interval(1000).pipe(
            map(
                (sc: number) => {
                        return convertSecondToDiplay(this.initValue - sc, 2, this.initValue);
                }
            )
        );
    }
}