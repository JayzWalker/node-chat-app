/**
 * Created by jayzwalker on 10/4/17.
 */
const moment = require('moment');


var createdAt = 1234
var date = moment(createdAt);
// date.add(1, 'year').subtract(10, 'month');
// console.log(date.format('MMM Do, YYYY'))


console.log(date.format('h:mm a'))