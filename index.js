// return an ISO 8601 string from a double microsecond value
// SSSS.uuuuuu -> 2014-11-03T23:17:30.310036Z
module.exports = function micro_to_iso(str) {
    str = String(str);

    var match = str.match(/^(\d+(?:[.]\d{0,3})?)(\d{0,3})?$/);

    if (!match) {
        throw new Error('Invalid microsecond format: ' + str);
    }

    var milliseconds = match[1];
    var microseconds = match[2];

    milliseconds = Math.floor(milliseconds * 1000);

    var date = new Date(milliseconds);
    date_str = date.toISOString();

    if (microseconds) {
        date_str = date_str.replace('Z', microseconds + 'Z');
    }
    return date_str;
}

