var app = new Vue ({
    el: "#app",
    data: {
        title: "Hello Vue!",
        styleCSS: '',
        value: 1
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
        }
    }
});