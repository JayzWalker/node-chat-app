/**
 * Created by jayzwalker on 10/4/17.
 */
var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = {isRealString};