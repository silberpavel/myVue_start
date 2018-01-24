// Global filter can be used for any object
Vue.filter('capitalize', function(value) {
    if(!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function(l) { return l.toUpperCase();})
});


var filter = new Vue({

    el: "#filter",
    data: {
        msg: 'TO Lower Case (FILTER)',
        msg2: 'TO Lower Case + Capitalize (global FILTER)'
    },

    // Local filter (only for one object)
    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    }
});