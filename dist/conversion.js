"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/**
 * Convert the seconds in format HH:MM:SS
 * @param sc seconds of the moment
 * @param type 1: counter / 2: discounter
 * @param limit value to stop the count
 */
function convertSecondToDiplay(sc, type, limit) {
    if (type === 1 && limit === sc || type === 2 && sc === 0) {
        return 'FINISH';
    }
    const hours = Math.floor((sc % constants_1.Chrono.SC_DAY) / constants_1.Chrono.SC_HOUR);
    const minutes = Math.floor((sc % constants_1.Chrono.SC_HOUR) / constants_1.Chrono.SC_MIN);
    const seconds = Math.floor(sc % constants_1.Chrono.SC_MIN);
    return formatToDisplay(hours, minutes, seconds);
}
exports.convertSecondToDiplay = convertSecondToDiplay;
/**
 * @ignore
 */
function formatToDisplay(hours, minutes, seconds) {
    const h = formatInTwoCharacters(hours);
    const m = formatInTwoCharacters(minutes);
    const s = formatInTwoCharacters(seconds);
    return `${h}:${m}:${s}`;
}
/**
 * @ignore
 */
function formatInTwoCharacters(num) {
    return (num < 10) ? '0'.concat(String(num)) : String(num);
}
