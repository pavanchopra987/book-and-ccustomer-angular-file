import { Component } from '@angular/core';
import { BookService } from './service/book.service';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mondaytask';

  book:any;
  customer:any
  constructor(private service: BookService , private customerservice: CustomerService){}
  ngOnInit(): void{
    this.loadData();
    this.loadData1();
  }
  loadData():void {
    this.service.getAll().subscribe(response=>{
      this.book = response;
      console.log(this.book);
    })
  }
  loadData1():void {
    this.customerservice.getAll().subscribe(response=>{
      this.customer = response;
      console.log(this.customer);
    })
  }
  addId=0;
  addName="";
  addAuthor="";
  addBook(){
    var newBook={
      "id":this.addId,
      "name":this.addName,
      "author":this.addAuthor
    };
    this.service.addBook(newBook).subscribe(response =>{
      var data = response;
      console.log(response);
    })
    this.addId = 0;
    this.addName="";
    this.addAuthor = "";
  }
  deletedId = 0;
  deleteBook(){
    this.service.deleteBook(this.deletedId).subscribe(response =>{
      console.log(response);
    })
  }
}
