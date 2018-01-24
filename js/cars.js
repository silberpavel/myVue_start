Vue.component ('app-car', {
    // component does not store any data!
    data: function() {
        return {
            cars: [
                {model: "BMW"},
                {model: "Volvo"},
                {model: "Mercedes-Benz"},
                {model: "Ford"},
                {model: "Audi"},
                {model: "Siat"},
                {model: "Fiat"}
            ]
        }
    },
    template: '<div><div class="myCar" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});

new Vue ({
    el: '#car',
    data: {
        // cars: [
//             {model: "BMW"},
//             {model: "Volvo"},
//             {model: "Mercedes-Benz"},
//             {model: "Ford"},
//             {model: "Audi"},
//             {model: "Siat"},
//             {model: "Fiat"}
//         ]
    }
});

new Vue ({
    el: '#car2',
    components: {
        'app-car2': {
            data: function() {
                return {
                    cars: [
                        {model: "BMW"},
                        {model: "Volvo"},
                        {model: "Mercedes-Benz"},
                        {model: "Audi"}
                    ]
                }
            },
            template: '<div><div class="myCar2" v-for="car in cars"><p>{{ car.model }}</p></div></div>'   
        }
    }
});