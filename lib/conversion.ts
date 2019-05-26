import { Chrono } from './constants';

/**
 * Convert the seconds in format HH:MM:SS
 * @param sc seconds of the moment
 * @param type 1: counter / 2: discounter
 * @param limit value to stop the count
 */
export function convertSecondToDiplay(sc: number, type: number, limit: number): string{
    if(type === 1 && limit === sc || type === 2 && sc === 0){
        return 'FINISH';
    } 
    const hours: number = Math.floor((sc % Chrono.SC_DAY) / Chrono.SC_HOUR);
    const minutes: number = Math.floor((sc % Chrono.SC_HOUR) / Chrono.SC_MIN);
    const seconds: number = Math.floor(sc % Chrono.SC_MIN);
    return formatToDisplay(hours, minutes, seconds);
}

/**
 * @ignore
 */
function formatToDisplay(hours: number, minutes: number, seconds: number){
    const h = formatInTwoCharacters(hours);
    const m = formatInTwoCharacters(minutes);
    const s = formatInTwoCharacters(seconds);
    return `${h}:${m}:${s}`;
}

/**
 * @ignore
 */
function formatInTwoCharacters(num: number):string {
    return (num < 10) ? '0'.concat(String(num)) : String(num);
}