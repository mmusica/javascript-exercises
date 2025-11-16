const repeatString = function(word, times) {

    if (times < 0){
        return "ERROR";
    }

    let empty = '';
    for (let i = 0; i < times; i++) {
        empty += word;
    }
    return empty;
};

// Do not edit below this line
module.exports = repeatString;
