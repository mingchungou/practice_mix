
"use strict";

app.filter("password", function() {
    return function(value, active) {
        if (active) {
            var result = "";

            for (var i = 0; i < value.length; i++) {
                result += "*";
            }

            return result;
        } else {
            return value;
        }
    };
});
