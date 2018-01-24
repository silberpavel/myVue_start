var filter = new Vue({

    el: "#filter",
    data: {
        msg: 'New ELEMENT'
    },

    filters: {
        lowerCase(value) {
            return value.toLowerCase();
        }
    }
});