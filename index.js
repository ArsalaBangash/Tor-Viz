const app = new Vue({
    el: '#app',
    computed: {
        computedState() {
            switch(this.state) {
                case 0: {
                    return "Tor has not been initialized"
                }
                case 1: {
                    return "Tor has been initialized."
                }
                case 2: {
                    // Add more
                }
            }
        }
    },
    data: {
        state: 0,
        message: {
            dest: "google.com",
            query: "cute dogs"
        },
        nodes: [
            {
                name: "You",
                type: "Start Node"
            },
            {
                name: "random.url.1",
                type: "Tor Node"
            },
            {
                name: "random.url.2",
                type: "Tor Node"
            },
            {
                name: "google.com",
                type: "End Node"
            }
        ]
    },
    methods: {
        previous: function() {
            this.state--;
        },
        next: function() {
            this.state++;
        }
    }

})