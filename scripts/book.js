
var Book = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {
        console.log("Book.init()");

        this.cover = document.querySelector('.book .cover');
        this.coverFold = document.querySelector('.book .cover > div > div');
        this.page1 = document.querySelector('.book .page1');
        this.page2 = document.querySelector('.book .page2');
    }
};

