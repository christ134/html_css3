const e=require('express');
var d=e();
const c=require('chalk');
d.set('views','./src/views');
d.set('view engine','ejs');
const p=require('path');

d.use(e.static(p.join(__dirname,"/")));
d.get('/',(req,res)=>{
res.render('index',{
                    nav:[
                        {link:'/books',title:'books'},
                        {link:'/authors',title:'Authors'}
                    ],
                    title:"library"



                    });
                    });

                    d.get('/books',(req,res)=>{
                        res.render('books',{
                                            nav:[
                                                {link:'/books',title:'books'},
                                                {link:'/authors',title:'Authors'}
                                            ],
                                            title:"BOOKS"
                        
                        
                        
                                            });
                                            });



const booksRouter=e.Router();
booksRouter.route('/books').get((req,res)=>{
    res.render('books');
})




d.use('/books',booksRouter);
d.use('/books/single',booksRouter);


d.listen(5622,()=>{
    console.log('listening to port'+ c.green('5622'));
})





