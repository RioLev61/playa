if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            lugares: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'http://localhost:5000/lugares'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.lugares = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(lugar) {
                const url = 'http://localhost:5000/lugares/' + lugar;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })
}
