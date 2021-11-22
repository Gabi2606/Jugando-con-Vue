const app =Vue.createApp({
    //objects, data, function
   // template: '<h2> I am the template</h2>'
   data(){
       return{
           url:  'www.google.com',
           showBooks: true,
        //    title: 'The Titlle',
        //    author: 'Brandon Sanderson',
        //    age: 45,
        //    x:0,
        //    y:0
        books:[
            {title:'title one', author:'author one', img:'asset/2.png', isFav: true},
            {title:'title two', author:'author two', img:'asset/2.png', isFav: false},
            {title:'title tree', author:'author tree',img:'asset/2.png', isFav: true},
        ]

        }
   },
   methods:{
      toggleShowBooks(){
           this.showBooks = !this.showBooks
       },
       toggleFav(book){
        book.isFav=!book.isFav
    },
       handleEvent(e, data){
           console.log(e, e.type)
           if(data){
               console.log(data)
           }
       },
       handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
       }
      
       },
       computed:{
            filteredBooks(){
                return this.books.filter((book) =>book.isFav)
            }
       }
   
})

app.mount('#app')
