function listPosition(word) {
    var indexer = {};
    var counts = [];

    var lettersCount = 0;
    word.split("").sort().forEach(function(x){
        if ( indexer[x] == undefined ) {
            indexer[x] = lettersCount;
            counts[lettersCount] = 0;
            lettersCount ++;
        }
    });

    var term = 1;
    var sum = term;
    word.split("").reverse().forEach(function(x, i){
        var step = i + 1, idx = indexer[x];
        counts[idx] ++;
        term /= counts[idx];
        for (var j = 0; j < idx; ++j) 
            if (counts[j] != 0) 
                sum += term * counts[j];
        term *= step;
    });
    return sum;
}
