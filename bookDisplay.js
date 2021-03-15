app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <a class="list-group-item list-group-item-action list-group-item-dark" :href="this.bookObj.selfLink"> {{ this.bookObj.volumeInfo.title }} </a>
        <li class= "list-group-item" v-if="this.bookObj.volumeInfo.imageLinks.thumbnail != undefined"> {{ this.bookObj.volumeInfo.imageLinks.thumbnail }} </li>
        <li class= "list-group-item" v-if="this.bookObj.volumeInfo.authors[0]"> {{ this.bookObj.volumeInfo.authors[0] }} </li>
        <li class= "list-group-item" v-if="this.bookObj.volumeInfo.mainCategory"> {{ this.bookObj.volumeInfo.mainCategory }} </li>
        <li class= "list-group-item" v-if="this.bookObj.volumeInfo.description"> {{ this.bookObj.volumeInfo.description }} </li>
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