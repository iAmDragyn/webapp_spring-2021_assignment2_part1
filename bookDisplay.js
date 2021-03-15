app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /* html */
        `<ul class="col-sm-12 col-md-6 col-xl-4">
            <a class="list-group-item list-group-item-action list-group-item-dark" :href="this.bookObj.selfLink"> {{ this.bookObj.volumeInfo.title }} </a>
            <img v-if="this.bookObj.volumeInfo.imageLinks.thumbnail != undefined" :src="this.bookObj.volumeInfo.imageLinks.thumbnail" width="150" height="150">
            <li class= "list-group-item" > {{ this.bookObj.volumeInfo.authors }} </li>
            <li class= "list-group-item" v-if="this.bookObj.volumeInfo.mainCategory !=undefined"> {{ this.bookObj.volumeInfo.mainCategory }} </li>
            <li class= "list-group-item" v-if="this.bookObj.volumeInfo.description !=undefined"> {{ this.bookObj.volumeInfo.description }} </li>
            <li class= "list-group-item" v-if="this.bookObj.volumeInfo.publisher != undefined"> {{ this.bookObj.volumeInfo.publisher }} </li>
            <li class= "list-group-item" v-if="this.bookObj.volumeInfo.publishedDate != undefined"> {{ this.bookObj.volumeInfo.publishedDate }} </li>
            <li class= "list-group-item" v-if="this.bookObj.saleInfo.listPrice != undefined" > {{ this.bookObj.saleInfo.listPrice.amount }} {{ this.bookObj.saleInfo.listPrice.currencyCode }}</li>
        </ul >`,

    computed: {
        bookObj() {
            if (this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }
})