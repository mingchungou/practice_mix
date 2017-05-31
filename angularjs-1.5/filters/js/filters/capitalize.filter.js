
"use strict";

app.filter("capitalize", function() {
    return function(value, all) {
        var value = value.toLowerCase(),
            valueSplit = value.split(" ");

        if (all) {
            for (let i in valueSplit) {
                valueSplit[i] = valueSplit[i][0].toUpperCase() + valueSplit[i].substr(1);
            }
        } else {
            valueSplit[0] = valueSplit[0][0].toUpperCase() + valueSplit[0].substr(1);
        }

        return valueSplit.join(" ");
    };
});
