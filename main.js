const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            startingBook: 0,
        }
    },
    methods: {
        searchGoogleBooks() {
            console.log(this.startingBook);
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + '&startIndex=' + this.startingBook + '&maxResults=30')
                .then(response => response.json())
                .then(json => this.result = json);
            document.querySelector("#paginationButtons").classList.remove("invisible");
        },
        nextBook() {
            this.startingBook += 30;
            this.searchGoogleBooks();
            console.log(this.startingBook);
            if (this.startingBook > 0) {
                document.querySelector("#previousButton").classList.remove("invisible");
            }
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            this.$forceUpdate();
        },
        previousBook() {
            this.startingBook -= 30;
            this.searchGoogleBooks();
            console.log(this.startingBook);
            if (this.startingBook < 30) {
                document.querySelector("#nextButton").classList.add("invisible");
            }
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            this.$forceUpdate();
        },
    }
})