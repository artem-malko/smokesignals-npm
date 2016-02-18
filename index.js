var existed = false;
var old;

if ('smokesignals' in global) {
    existed = true;
    old = global.smokesignals;
}

require('./smokesignals.unminified');

module.exports = smokesignals;

if (existed) {
    global.smokesignals = old;
}
else {
    try {
        delete global.smokesignals;
    } catch(e) {
        global.smokesignals = undefined;
    }
}
