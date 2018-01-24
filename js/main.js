var app = new Vue ({
    el: "#app",
    data: {
        title: "Hello Vue!",
        styleCSS: '',
        value: 1,
        show: true,
        message: 'Hello VueJS',
        cars: [
            {model: "BMW", speed: 258},
            {model: "Audi", speed: 228},
            {model: "Mercedes-Benz AMG", speed: 191},
            {model: "Ford", speed: 188}
        ]
    },
    methods: {
        changeText () {
            this.title = 'change Text method'
        },
        increment(value) {
            this.value = value  // object value = method value
            if(value==25) {
                alert ("25")
            }
        }
    },
    computed: {
        doubleValue() {
            return this.value * 2
        },
        showMess() {
            return this.message.toUpperCase();
        }
    },

});