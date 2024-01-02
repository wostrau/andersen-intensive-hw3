function myFilter(callback, thisArg) {
    const array = Object(this);
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (i in array) {
            const element = array[i];

            if (callback.call(thisArg, element, i, array)) {
                result.push(element);
            }
        }
    }

    return result;
};

Array.prototype.myFilter = myFilter;

function createDebounceFunction(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, delay);
    };
}