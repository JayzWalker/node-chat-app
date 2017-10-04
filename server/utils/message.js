/**
 * Created by jayzwalker on 10/4/17.
 */
var generateMessage = (from, text) => {
    return {
        from,
        text,
        createAt: new Date().getTime()
    };
};

module.exports = {generateMessage};